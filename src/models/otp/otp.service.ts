import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Injectable()
export class OTPService {
  constructor(private readonly prisma: PrismaService) {}

  async createOtp(accountId: string) {
    let code = this.generateOtpCode();

    while (true) {
      const otpRecord = await this.prisma.oTP.findUnique({
        where: {
          code,
        },
      });

      if (!otpRecord) {
        break;
      }
      // If the code already exists, generate a new one
      code = this.generateOtpCode();
    }

    // Delete all existing OTP records for the account
    await this.prisma.oTP.deleteMany({
      where: {
        accountId,
        type: 'FORGOT_PASSWORD',
      },
    });

    // Create a new OTP record
    const otpRecord = await this.prisma.oTP.create({
      data: {
        account: {
          connect: {
            id: accountId,
          },
        },
        code: this.generateOtpCode(),
        type: 'FORGOT_PASSWORD',
        expiredAt: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes
      },
      select: {
        id: true,
        code: true,
        expiredAt: true,
      },
    });

    return otpRecord;
  }

  async verifyOtp(code: string) {
    const otpRecord = await this.prisma.oTP.findFirst({
      where: {
        code,
        expiredAt: {
          gte: new Date(),
        },
      },
      select: {
        id: true,
        code: true,
        expiredAt: true,
      },
    });

    await this.prisma.oTP.deleteMany({
      where: {
        code,
      },
    });

    return otpRecord;
  }

  async deleteOtp(accountId: string, code: string) {
    const otpRecord = await this.prisma.oTP.deleteMany({
      where: {
        accountId,
        code,
      },
    });

    return otpRecord;
  }

  generateOtpCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }
}
