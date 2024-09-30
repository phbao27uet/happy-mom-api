import { Module } from '@nestjs/common';
import { PrismaModule } from '@shared/prisma';
import { BabyMonitoringsController } from './baby-monitorings.controller';
import { BabyMonitoringsService } from './baby-monitorings.service';

@Module({
  imports: [PrismaModule],
  providers: [BabyMonitoringsService],
  controllers: [BabyMonitoringsController],
  exports: [BabyMonitoringsService],
})
export class BabyMonitoringsModule {}
