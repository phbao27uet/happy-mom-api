import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PrismaModule } from 'src/shared/prisma/prisma.module';
import { CommentsModule } from '@models/comments/comments.module';
import { LikesModule } from '@models/likes/likes.module';

@Module({
  imports: [PrismaModule, CommentsModule, LikesModule],
  providers: [PostsService],
  controllers: [PostsController],
  exports: [PostsService],
})
export class PostsModule {}
