import { CommentsModule } from '@models/comments/comments.module'
import { LikesModule } from '@models/likes/likes.module'
import { Module } from '@nestjs/common'
import { PrismaModule } from '@shared/prisma'
import { RecipesController } from './recipes.controller'
import { RecipesService } from './recipes.service'

@Module({
  imports: [PrismaModule, CommentsModule, LikesModule],
  controllers: [RecipesController],
  providers: [RecipesService],
  exports: [RecipesService],
})
export class RecipesModule {}
