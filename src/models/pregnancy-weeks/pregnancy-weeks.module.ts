import { Module } from '@nestjs/common';
import { PrismaModule } from '@shared/prisma';
import { PregnancyWeeksService } from './pregnancy-weeks.service';
import { PregnancyWeeksController } from './pregnancy-weeks.controller';

@Module({
  imports: [PrismaModule],
  providers: [PregnancyWeeksService],
  controllers: [PregnancyWeeksController],
  exports: [PregnancyWeeksService],
})
export class PregnancyWeeksModule {}
