import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/shared/prisma/prisma.module'
import { EmotionController } from './emotion.controller'
import { EmotionService } from './emotion.service'

@Module({
  imports: [PrismaModule],
  providers: [EmotionService],
  controllers: [EmotionController],
  exports: [EmotionService],
})
export class EmotionModule {}
