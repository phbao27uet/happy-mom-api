import { Injectable } from '@nestjs/common';
import { PrismaService } from '@shared/prisma';
import { CreateCommentDto } from './dto';

@Injectable()
export class CommentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create({
    data,
    authorId,
    postId,
  }: {
    data: CreateCommentDto;
    authorId: string;
    postId: string;
  }) {
    return this.prisma.comment.create({
      data: {
        authorId,
        postId,
        ...data,
      },
    });
  }

  async getCommentsByPostId(postId: string) {
    return this.prisma.comment.findMany({
      where: {
        postId,
      },
    });
  }

  async commentArticle({
    data,
    authorId,
    articleId,
  }: {
    data: CreateCommentDto;
    authorId: string;
    articleId: string;
  }) {
    return this.prisma.comment.create({
      data: {
        authorId,
        articleId,
        ...data,
      },
    });
  }
}
