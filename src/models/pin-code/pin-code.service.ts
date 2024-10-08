import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '@shared/prisma';
import { hashPinCode } from '@shared/utils';
import * as argon2 from 'argon2';

@Injectable()
export class PinCodeService {
  constructor(private readonly prisma: PrismaService) {}

  async createOrUpdatePinCode(
    accountId: string,
    plainPinCode: string,
  ): Promise<void> {
    const existingPinCode = await this.prisma.pinCode.findUnique({
      where: { accountId },
    });

    const hashedPin = await hashPinCode(plainPinCode);

    if (existingPinCode) {
      await this.prisma.pinCode.update({
        where: { accountId },
        data: { pinCode: hashedPin },
      });
    } else {
      await this.prisma.pinCode.create({
        data: {
          pinCode: hashedPin,
          accountId,
        },
      });
    }

    await this.prisma.account.update({
      where: { id: accountId },
      data: { isPinCode: true },
    });
  }

  async validatePinCode(
    accountId: string,
    plainPinCode: string,
  ): Promise<boolean> {
    const pinCodeRecord = await this.prisma.pinCode.findUnique({
      where: { accountId },
    });

    if (!pinCodeRecord) {
      throw new BadRequestException('Pin code not found for this account.');
    }

    return await argon2.verify(pinCodeRecord.pinCode, plainPinCode);
  }

  async deletePinCode(accountId: string): Promise<void> {
    const pinCodeRecord = await this.prisma.pinCode.findUnique({
      where: { accountId },
    });

    if (!pinCodeRecord) {
      throw new BadRequestException('No pin code found for this account.');
    }

    await this.prisma.pinCode.delete({
      where: { accountId },
    });

    await this.prisma.account.update({
      where: { id: accountId },
      data: { isPinCode: false },
    });
  }
}
