import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as argon from 'argon2'

import { OTPService } from '@models/otp/otp.service'
import { SmsService } from '@models/sms/sms.service'
import { Prisma } from '@prisma/client'
import { hashPassword, isPasswordValid } from '@shared/utils'
import { isMail } from '@shared/utils'
import { omit, uniq } from 'lodash'
import { PrismaService } from 'src/shared/prisma/prisma.service'
import { JWT_CONSTANTS } from 'src/shared/utils/constants'
import { CredentialsDto } from './dto'
import { ChangePasswordDto } from './dto/change-password.dto'
import { SignUpDto } from './dto/sign-up.dto'
import { Tokens } from './types'

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private otpService: OTPService,
    private smsService: SmsService,
  ) {}

  private _select: Prisma.AccountSelect = {
    id: true,
    username: true,
    role: true,
    pushTokens: true,
  }

  async signup(dto: SignUpDto) {
    const accountExist = await this.prisma.account.findUnique({
      where: {
        username: dto.username,
      },
    })

    if (accountExist) {
      throw new ForbiddenException('Email hoặc Số điện thoại đã được sử dụng')
    }
    const hash = await argon.hash(dto.password)

    const user = await this.prisma.account.create({
      data: {
        username: dto.username,
        password: hash,
        role: 'USER',
      },
    })

    return {
      id: user.id,
      username: user.username,
      role: user.role,
    }
  }

  async login(dto: CredentialsDto, isAdmin = false) {
    const account = await this.prisma.account.findUnique({
      where: {
        username: dto.username,
        role: isAdmin ? 'ADMIN' : 'USER',
      },
      select: {
        id: true,
        username: true,
        password: true,
        role: true,
      },
    })

    if (!account) throw new BadRequestException('Tài khoản không tồn tại')
    const { password, ...accountWithoutPassword } = account

    const passwordMatches = await isPasswordValid(dto.password, password)
    if (!passwordMatches) throw new BadRequestException('Mật khẩu không đúng')

    const tokens = await this.generateToken(
      account.id,
      account.username,
      account.role,
    )
    await this.updateRtHash(account.id, tokens.refreshToken)

    return { ...tokens, user: accountWithoutPassword }
  }

  async changePassword(
    accountId: string,
    changePasswordDto: ChangePasswordDto,
  ) {
    const account = await this.prisma.account.findUnique({
      where: {
        id: accountId,
      },
      select: {
        password: true,
      },
    })

    if (!account) throw new BadRequestException('Tài khoản không tồn tại')

    const passwordMatches = await isPasswordValid(
      changePasswordDto.current_password,
      account.password,
    )

    if (!passwordMatches)
      throw new BadRequestException('Mật khẩu cũ không đúng')

    const hash = await hashPassword(changePasswordDto.new_password)

    await this.prisma.account.update({
      where: {
        id: accountId,
      },
      data: {
        password: hash,
      },
    })

    return true
  }

  async forgotPassword(username: string) {
    const account = await this.prisma.account.findUnique({
      where: {
        username,
      },
    })

    if (!account) throw new BadRequestException('Tài khoản không tồn tại')

    const otpRecord = await this.otpService.createOtp(account.id)

    if (!isMail(username)) {
      await this.smsService.sendSms({
        to: username,
        content: `Mã OTP của bạn là: ${otpRecord.code}`,
      })
    }

    return otpRecord
  }

  async verifyOtp(code: string) {
    const res = await this.otpService.verifyOtp(code)

    if (!res) throw new BadRequestException('Mã OTP không hợp lệ')

    return res
  }

  async logout(accountId: string): Promise<boolean> {
    await this.prisma.account.updateMany({
      where: {
        id: accountId,
        refreshToken: {
          not: null,
        },
      },
      data: {
        refreshToken: null,
      },
    })
    return true
  }

  async me(accountId: string) {
    const user = await this.prisma.account.findUnique({
      where: {
        id: accountId,
      },
      include: {
        user: {
          include: {
            childs: true,
          },
        },
      },
    })

    return omit(user, ['password', 'refreshToken', 'isVerified'])
  }

  async refreshTokens(
    accountId: string,
    rt: string,
  ): Promise<Omit<Tokens, 'refreshToken'>> {
    const account = await this.prisma.account.findUnique({
      where: {
        id: accountId,
      },
    })
    if (!account || !account.refreshToken)
      throw new ForbiddenException('Access Denied')

    const rtMatches = await argon.verify(account.refreshToken, rt)

    console.log('rtMatches', rtMatches)

    // if (!rtMatches) throw new ForbiddenException('Access Denied 123');

    const newAccessToken = await this.jwtService.signAsync(
      {
        accountId: account.id,
        username: account.username,
      },
      {
        secret: JWT_CONSTANTS.ACCESS_TOKEN_SECRET,
        expiresIn: JWT_CONSTANTS.ACCESS_TOKEN_EXPIRES_IN,
      },
    )

    return { accessToken: newAccessToken }
  }

  async updateRtHash(accountId: string, rt: string): Promise<void> {
    const hash = await argon.hash(rt)
    await this.prisma.account.update({
      where: {
        id: accountId,
      },
      data: {
        refreshToken: hash,
      },
    })
  }

  async generateToken(accountId: string, username: string, role = 'USER') {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          accountId,
          username,
          role,
        },
        {
          secret: JWT_CONSTANTS.ACCESS_TOKEN_SECRET,
          expiresIn: JWT_CONSTANTS.ACCESS_TOKEN_EXPIRES_IN,
        },
      ),
      this.jwtService.signAsync(
        {
          accountId,
          username,
          role,
        },
        {
          secret: JWT_CONSTANTS.REFRESH_TOKEN_SECRET,
          expiresIn: JWT_CONSTANTS.REFRESH_TOKEN_EXPIRES_IN,
        },
      ),
    ])

    return {
      accessToken,
      refreshToken,
    }
  }

  async updatePushToken(accountId: string, pushToken: string) {
    const account = await this.prisma.account.findUnique({
      where: {
        id: accountId,
      },
      select: {
        pushTokens: true,
      },
    })

    if (!account) throw new BadRequestException('Tài khoản không tồn tại')

    const res = await this.prisma.account.update({
      where: {
        id: accountId,
      },
      data: {
        pushTokens: uniq([...account.pushTokens, pushToken]),
      },
      select: this._select,
    })

    return res
  }
}
