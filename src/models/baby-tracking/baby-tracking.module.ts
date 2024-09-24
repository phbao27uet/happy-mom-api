import { Module } from '@nestjs/common';
import { PrismaModule } from '@shared/prisma';
import { BabyTrackingController } from './baby-tracking.controller';
import { BabyTrackingService, PumpingService } from './services';

@Module({
  imports: [PrismaModule],
  controllers: [BabyTrackingController],
  providers: [BabyTrackingService, PumpingService],
})
export class BabyTrackingModule {}
