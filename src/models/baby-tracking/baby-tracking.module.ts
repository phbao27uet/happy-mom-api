import { Module } from '@nestjs/common';
import { PrismaModule } from '@shared/prisma';
import { BabyTrackingController } from './baby-tracking.controller';
import { BabyTrackingService } from './services/baby-tracking.service';

@Module({
  imports: [PrismaModule],
  controllers: [BabyTrackingController],
  providers: [BabyTrackingService],
})
export class BabyTrackingModule {}
