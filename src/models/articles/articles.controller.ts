import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { Auth, GetCurrentId } from '@shared/decorators';
import { DefaultFindAllQueryDto } from '@models/base';
import { LikesService } from '@models/likes/likes.service';
import { CommentsService } from '@models/comments/comments.service';
import { CreateCommentDto } from '@models/comments/dto';
import { CreateArticleDto } from './dto';
import { UpdateArticleDto } from './dto/update.dto';

@Controller('articles')
export class ArticlesController {
  constructor(
    private readonly articlesService: ArticlesService,
    private readonly likesService: LikesService,
    private readonly commentsService: CommentsService,
  ) {}

  @Auth('USER', 'ADMIN')
  @Get('')
  async findAll(@Query() queryDto: DefaultFindAllQueryDto) {
    return this.articlesService.findAll(queryDto);
  }

  @Auth('USER', 'ADMIN')
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.articlesService.findOne(id);
  }

  @Auth('USER')
  @Get('by-category/:categoryId')
  async findByCategory(@Param('categoryId') categoryId: string) {
    return this.articlesService.findByCategory(categoryId);
  }

  @Auth('USER')
  @Get('by-sub-category/:subCategoryId')
  async findBySubCategory(@Param('subCategoryId') subCategoryId: string) {
    return this.articlesService.findBySubCategory(subCategoryId);
  }

  @Auth('ADMIN')
  @Post('')
  async create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }

  @Auth('USER')
  @Post(':id/comments')
  async createComment(
    @GetCurrentId() currentId: string,
    @Param('id') id: string,
    @Body() createCommentDto: CreateCommentDto,
  ) {
    return this.commentsService.commentArticle({
      authorId: currentId,
      articleId: id,
      data: createCommentDto,
    });
  }

  @Auth('USER')
  @Post(':id/like/toggle')
  async toggleLikePost(
    @GetCurrentId() currentId: string,
    @Param('id') id: string,
  ) {
    return this.likesService.toggleLike({
      id,
      accountId: currentId,
      type: 'ARTICLE',
    });
  }

  @Auth('ADMIN')
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateArticleDto: UpdateArticleDto,
  ) {
    return this.articlesService.update(id, updateArticleDto);
  }

  @Auth('ADMIN')
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.articlesService.remove(id);
  }
}
