import { LikesService } from '@models/likes/likes.service';
import { Controller, Param, Post } from '@nestjs/common';
import { Auth, GetCurrentId } from '@shared/decorators';

@Controller('comments')
export class CommentsController {
  constructor(private readonly likesService: LikesService) {}

  @Auth('USER')
  @Post(':id/like/toggle')
  async toggleLikeComment(
    @GetCurrentId() currentId: string,
    @Param('id') id: string,
  ) {
    return this.likesService.toggleLikeComment(id, currentId);
  }
}
