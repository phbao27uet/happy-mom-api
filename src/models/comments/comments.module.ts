import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { PrismaModule } from '@shared/prisma';
import { LikesModule } from '@models/likes/likes.module';
import { CommentsController } from './comments.controller';

@Module({
  imports: [PrismaModule, LikesModule],
  controllers: [CommentsController],
  providers: [CommentsService],
  exports: [CommentsService],
})
export class CommentsModule {}
