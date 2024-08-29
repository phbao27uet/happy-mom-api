import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { PrismaModule } from '@shared/prisma';
import { ArticlesController } from './articles.controller';
import { CommentsModule } from '@models/comments/comments.module';
import { LikesModule } from '@models/likes/likes.module';

@Module({
  imports: [PrismaModule, CommentsModule, LikesModule],
  controllers: [ArticlesController],
  providers: [ArticlesService],
  exports: [ArticlesService],
})
export class ArticlesModule {}
