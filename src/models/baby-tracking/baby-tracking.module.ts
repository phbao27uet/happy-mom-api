import { Module } from '@nestjs/common';
import { PrismaModule } from '@shared/prisma';
import { BabyTrackingController } from './baby-tracking.controller';
import {
  BabyTrackingService,
  PumpingService,
  SleepingService,
} from './services';

@Module({
  imports: [PrismaModule],
  controllers: [BabyTrackingController],
  providers: [BabyTrackingService, PumpingService, SleepingService],
})
export class BabyTrackingModule {}
