import { Module } from '@nestjs/common';
import { PrismaModule } from '@shared/prisma';
import { BabyTrackingController } from './baby-tracking.controller';
import { DiaperService } from './services/diaper.service';

@Module({
  imports: [PrismaModule],
  controllers: [BabyTrackingController],
  providers: [DiaperService],
})
export class BabyTrackingModule {}
