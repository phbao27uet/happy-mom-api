import { Module } from '@nestjs/common';
import { PrismaModule } from '@shared/prisma';
import { BabyTrackingController } from './baby-tracking.controller';
import {
  BabyTrackingService,
  DiaperService,
  FeedingService,
  PumpingService,
  SleepingService,
  SolidFoodService,
} from './services';

@Module({
  imports: [PrismaModule],
  controllers: [BabyTrackingController],
  providers: [
    BabyTrackingService,
    PumpingService,
    SleepingService,
    FeedingService,
    DiaperService,
    SolidFoodService,
  ],
})
export class BabyTrackingModule {}
