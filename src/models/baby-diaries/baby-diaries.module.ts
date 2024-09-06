import { Module } from '@nestjs/common';
import { BabyDiariesService } from './baby-diaries.service';
import { BabyDiariesController } from './baby-diaries.controller';
import { PrismaModule } from 'src/shared/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [BabyDiariesService],
  controllers: [BabyDiariesController],
  exports: [BabyDiariesService],
})
export class BabyDiariesModule {}
