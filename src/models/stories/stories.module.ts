import { Module } from '@nestjs/common'
import { PrismaModule } from '@shared/prisma'
import { StoriesController } from './stories.controller'
import { StoriesService } from './stories.service'

@Module({
  imports: [PrismaModule],
  controllers: [StoriesController],
  providers: [StoriesService],
  exports: [StoriesService],
})
export class StoriesModule {}
