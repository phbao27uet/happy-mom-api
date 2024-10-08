import { Module } from '@nestjs/common';
import { PinCodeService } from './pin-code.service';
import { PinCodeController } from './pin-code.controller';
import { PrismaService } from '@shared/prisma';

@Module({
  controllers: [PinCodeController],
  providers: [PinCodeService, PrismaService],
})
export class PinCodeModule {}
