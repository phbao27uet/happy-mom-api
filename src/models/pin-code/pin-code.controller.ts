import { Controller, Post, Body, Param, Delete } from '@nestjs/common';
import { PinCodeService } from './pin-code.service';
import { Auth } from '@shared/decorators';

@Controller('pin-code')
export class PinCodeController {
  constructor(private readonly pinCodeService: PinCodeService) {}

  @Auth('USER', 'ADMIN')
  @Post('create-or-update/:accountId')
  async createOrUpdatePinCode(
    @Param('accountId') accountId: string,
    @Body('pinCode') plainPinCode: string,
  ): Promise<void> {
    await this.pinCodeService.createOrUpdatePinCode(accountId, plainPinCode);
  }

  @Auth('USER', 'ADMIN')
  @Post('validate/:accountId')
  async validatePinCode(
    @Param('accountId') accountId: string,
    @Body('pinCode') plainPinCode: string,
  ): Promise<boolean> {
    return await this.pinCodeService.validatePinCode(accountId, plainPinCode);
  }

  @Auth('USER', 'ADMIN')
  @Delete(':accountId')
  async deletePinCode(@Param('accountId') accountId: string): Promise<void> {
    await this.pinCodeService.deletePinCode(accountId);
  }
}
