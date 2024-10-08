import { OTPModule } from '@models/otp/otp.module'
import { SmsModule } from '@models/sms/sms.module'
import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PrismaModule } from 'src/shared/prisma/prisma.module'
import { JWT_CONSTANTS } from 'src/shared/utils/constants'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: JWT_CONSTANTS.ACCESS_TOKEN_SECRET,
      signOptions: { expiresIn: JWT_CONSTANTS.ACCESS_TOKEN_EXPIRES_IN },
    }),
    PrismaModule,
    OTPModule,
    SmsModule,
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
