import { Module } from '@nestjs/common';
import { LikesService } from './likes.service';
import { PrismaModule } from '@shared/prisma';

@Module({
  imports: [PrismaModule],
  providers: [LikesService],
  exports: [LikesService],
})
export class LikesModule {}
