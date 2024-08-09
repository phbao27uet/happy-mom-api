import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon from 'argon2';

import { CredentialsDto } from './dto';
import { Tokens } from './types';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { JWT_CONSTANTS } from 'src/shared/utils/constants';
import { SignUpDto } from './dto/sign-up.dto';
import { hashPassword, isPasswordValid } from '@shared/utils';
import { ChangePasswordDto } from './dto/change-password.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signup(dto: SignUpDto) {
    const accountExist = await this.prisma.account.findUnique({
      where: {
        username: dto.username,
      },
    });

    if (accountExist) {
      throw new ForbiddenException('Email hoặc Số điện thoại đã được sử dụng');
    }
    const hash = await argon.hash(dto.password);

    const user = await this.prisma.account.create({
      data: {
        username: dto.username,
        password: hash,
        role: 'USER',
      },
    });

    return {
      id: user.id,
      username: user.username,
      role: user.role,
    };
  }

  async login(dto: CredentialsDto) {
    const account = await this.prisma.account.findUnique({
      where: {
        username: dto.username,
      },
      select: {
        id: true,
        username: true,
        password: true,
        role: true,
      },
    });

    if (!account) throw new BadRequestException('Tài khoản không tồn tại');
    const { password, ...accountWithoutPassword } = account;

    const passwordMatches = await isPasswordValid(dto.password, password);
    if (!passwordMatches) throw new BadRequestException('Mật khẩu không đúng');

    const tokens = await this.generateToken(
      account.id,
      account.username,
      account.role,
    );
    await this.updateRtHash(account.id, tokens.refreshToken);

    return { ...tokens, user: accountWithoutPassword };
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
    });

    if (!account) throw new BadRequestException('Tài khoản không tồn tại');

    const passwordMatches = await isPasswordValid(
      changePasswordDto.current_password,
      account.password,
    );

    if (!passwordMatches)
      throw new BadRequestException('Mật khẩu cũ không đúng');

    const hash = await hashPassword(changePasswordDto.new_password);

    await this.prisma.account.update({
      where: {
        id: accountId,
      },
      data: {
        password: hash,
      },
    });

    return true;
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
    });
    return true;
  }

  async me(accountId: string) {
    const user = await this.prisma.account.findUnique({
      where: {
        id: accountId,
      },

      select: {
        id: true,
        username: true,
        role: true,
        pinCode: true,
        user: true,
      },
    });

    return user;
  }

  async refreshTokens(
    accountId: string,
    rt: string,
  ): Promise<Omit<Tokens, 'refreshToken'>> {
    const account = await this.prisma.account.findUnique({
      where: {
        id: accountId,
      },
    });
    if (!account || !account.refreshToken)
      throw new ForbiddenException('Access Denied');

    const rtMatches = await argon.verify(account.refreshToken, rt);

    console.log('rtMatches', rtMatches);

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
    );

    return { accessToken: newAccessToken };
  }

  async updateRtHash(accountId: string, rt: string): Promise<void> {
    const hash = await argon.hash(rt);
    await this.prisma.account.update({
      where: {
        id: accountId,
      },
      data: {
        refreshToken: hash,
      },
    });
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
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }
}
