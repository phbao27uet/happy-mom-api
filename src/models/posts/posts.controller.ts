import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Auth, GetCurrentId } from '@shared/decorators';
import { DefaultFindAllQueryDto } from '@models/base';
import { CreatePostDto, UpdatePostDto } from './dto';
import { LikesService } from '@models/likes/likes.service';
import { CommentsService } from '@models/comments/comments.service';
import { CreateCommentDto } from '@models/comments/dto';

@Controller('posts')
export class PostsController {
  constructor(
    private readonly postsService: PostsService,
    private readonly likesService: LikesService,
    private readonly commentsService: CommentsService,
  ) {}

  @Auth('USER', 'ADMIN')
  @Get('')
  async findAll(@Query() queryDto: DefaultFindAllQueryDto) {
    return this.postsService.findAll(queryDto);
  }

  @Auth('USER')
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }

  @Auth('USER')
  @Get(':id/comments')
  async getComments(@Param('id') id: string) {
    return this.commentsService.getCommentsByPostId(id);
  }

  @Auth('USER')
  @Get(':id/likes')
  async getLikes(@Param('id') id: string) {
    return this.likesService.getLikesByPostId(id);
  }

  @Auth('USER')
  @Post('')
  async create(
    @GetCurrentId() currentId: string,
    @Body() createPostDto: CreatePostDto,
  ) {
    return this.postsService.create(currentId, createPostDto);
  }

  @Auth('USER')
  @Post(':id/comments')
  async createComment(
    @GetCurrentId() currentId: string,
    @Param('id') id: string,
    @Body() createCommentDto: CreateCommentDto,
  ) {
    return this.commentsService.create({
      authorId: currentId,
      postId: id,
      data: createCommentDto,
    });
  }

  @Auth('USER')
  @Post(':id/likes/toggle')
  async toggleLikePost(
    @GetCurrentId() currentId: string,
    @Param('id') id: string,
  ) {
    return this.likesService.toggleLikePost(id, currentId);
  }

  @Auth('USER')
  @Post(':id/remove')
  async remove(@Param('id') id: string) {
    return this.postsService.remove(id);
  }

  @Auth('USER')
  @Post(':id/update')
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(id, updatePostDto);
  }
}
