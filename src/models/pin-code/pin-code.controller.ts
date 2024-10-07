import { Controller, Post, Body, Param, Delete } from '@nestjs/common';
import { PinCodeService } from './pin-code.service';
import { Auth } from '@shared/decorators';

@Auth('USER', 'ADMIN')
@Controller('pin-code')
export class PinCodeController {
  constructor(private readonly pinCodeService: PinCodeService) {}

  @Post('create-or-update/:accountId')
  async createOrUpdatePinCode(
    @Param('accountId') accountId: string,
    @Body('pinCode') plainPinCode: string,
  ): Promise<void> {
    await this.pinCodeService.createOrUpdatePinCode(accountId, plainPinCode);
  }

  @Post('validate/:accountId')
  async validatePinCode(
    @Param('accountId') accountId: string,
    @Body('pinCode') plainPinCode: string,
  ): Promise<boolean> {
    return await this.pinCodeService.validatePinCode(accountId, plainPinCode);
  }

  @Delete(':accountId')
  async deletePinCode(@Param('accountId') accountId: string): Promise<void> {
    await this.pinCodeService.deletePinCode(accountId);
  }
}
