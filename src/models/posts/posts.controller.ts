import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Auth, GetCurrentId } from '@shared/decorators';
import { DefaultFindAllQueryDto } from '@models/base';
import { CreatePostDto } from './dto';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Auth('USER')
  @Get('')
  async getAll(@Query() queryDto: DefaultFindAllQueryDto) {
    return this.postsService.findAll(queryDto);
  }

  @Auth('USER')
  @Get(':id')
  async getOne() {
    return 'getOne';
  }

  @Auth('USER')
  @Get(':id/comments')
  async getComments() {
    return 'getComments';
  }

  @Auth('USER')
  @Get(':id/likes')
  async getLikes() {
    return 'getLikes';
  }

  @Auth('USER')
  @Post('')
  async create(
    @GetCurrentId() currentId: string,
    @Body() createPostDto: CreatePostDto,
  ) {
    return this.postsService.create(currentId, createPostDto);
  }
}
