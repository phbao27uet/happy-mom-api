import { Module } from '@nestjs/common';
import { PrismaModule } from '@shared/prisma';
import { PregnancyWeekDetailsService } from './pregnancy-week-details.service';
import { PregnancyWeekDetailsController } from './pregnancy-week-details.controller';

@Module({
  imports: [PrismaModule],
  providers: [PregnancyWeekDetailsService],
  controllers: [PregnancyWeekDetailsController],
  exports: [PregnancyWeekDetailsService],
})
export class PregnancyWeekDetailsModule {}
