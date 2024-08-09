import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { JWT_CONSTANTS } from 'src/shared/utils/constants';
import { PrismaModule } from 'src/shared/prisma/prisma.module';
import { OTPModule } from '@models/otp/otp.module';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: JWT_CONSTANTS.ACCESS_TOKEN_SECRET,
      signOptions: { expiresIn: JWT_CONSTANTS.ACCESS_TOKEN_EXPIRES_IN },
    }),
    PrismaModule,
    OTPModule,
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
