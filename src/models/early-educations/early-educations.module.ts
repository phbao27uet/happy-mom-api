import { Module } from '@nestjs/common';
import { EarlyEducationsService } from './early-educations.service';
import { EarlyEducationsController } from './early-educations.controller';
import { PrismaModule } from 'src/shared/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [EarlyEducationsService],
  controllers: [EarlyEducationsController],
  exports: [EarlyEducationsService],
})
export class EarlyEducationsModule {}
