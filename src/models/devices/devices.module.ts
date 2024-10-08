import { Module } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { DevicesController } from './devices.controller';
import { PrismaService } from '@shared/prisma';

@Module({
  controllers: [DevicesController],
  providers: [DevicesService, PrismaService],
})
export class DevicesModule {}
