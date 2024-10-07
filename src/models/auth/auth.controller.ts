import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CredentialsDto, PushTokenDto } from './dto';
import { GetCurrentId } from 'src/shared/decorators/get-current-user-id.decorator';
import { RtGuard } from './guards/rt.guard';
import { GetRt } from '@shared/decorators';
import { SignUpDto } from './dto/sign-up.dto';
import { AuthGuard } from './guards/auth.guard';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ForgotPasswordDto } from './dto/forgot-password';
import { VerifyOTPDto } from './dto/verify-otp.dto';
import { Account } from '@prisma/client';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: CredentialsDto) {
    return this.authService.login(loginDto);
  }

  @Post('login-admin')
  async loginAdmin(@Body() loginDto: CredentialsDto) {
    return this.authService.login(loginDto, true);
  }

  @Post('logout')
  async logout(@GetCurrentId() currentId: string) {
    return this.authService.logout(currentId);
  }

  @Post('forgot-password')
  async forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
    return this.authService.forgotPassword(forgotPasswordDto.username);
  }

  @Post('verify-otp')
  async verifyOtp(@Body() verifyOtpDto: VerifyOTPDto) {
    return this.authService.verifyOtp(verifyOtpDto.code);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  async me(@GetCurrentId() currentId: string) {
    return this.authService.me(currentId);
  }

  @Post('signup')
  async signup(@Body() signupDto: SignUpDto) {
    return this.authService.signup(signupDto);
  }
  @UseGuards(AuthGuard)
  @Patch('change-password')
  async changePassword(
    @Body() changePasswordDto: ChangePasswordDto,
    @GetCurrentId() currentId: string,
  ) {
    return this.authService.changePassword(currentId, changePasswordDto);
  }

  @UseGuards(AuthGuard)
  @Patch('push-token')
  async updatePushToken(
    @Body() pushTokenDto: PushTokenDto,
    @GetCurrentId() currentId: string,
  ) {
    return this.authService.updatePushToken(currentId, pushTokenDto.token);
  }

  @UseGuards(RtGuard)
  @Get('refresh')
  async refreshToken(
    @GetRt() refreshToken: string,
    @GetCurrentId() currentId: string,
  ) {
    return this.authService.refreshTokens(currentId, refreshToken);
  }

  @Patch(':accountId/pin-code/toggle')
  async togglePinCodeStatus(
    @Param('accountId') accountId: string,
  ): Promise<Account> {
    return this.authService.togglePinCodeStatus(accountId);
  }

  @UseGuards(AuthGuard)
  @Delete('delete-account')
  async deleteAccount(@GetCurrentId() currentId: string) {
    return this.authService.deleteAccount(currentId);
  }
}
