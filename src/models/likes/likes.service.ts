import { Injectable } from '@nestjs/common';
import { PrismaService } from '@shared/prisma';
import { IToggleLike } from './interfaces';
import { Prisma } from '@prisma/client';

@Injectable()
export class LikesService {
  constructor(private readonly prisma: PrismaService) {}

  async toggleLike({ id, accountId, type }: IToggleLike) {
    const where: Prisma.LikeWhereInput = {
      accountId,
    };

    if (type === 'POST') {
      where.postId = id;
    }

    if (type === 'ARTICLE') {
      where.articleId = id;
    }

    const like = await this.prisma.like.findFirst({
      where,
    });

    if (like) {
      await this.prisma.like.delete({
        where: {
          id: like.id,
        },
      });

      return 'UNLIKE';
    } else {
      const data: Prisma.LikeCreateInput = {
        account: {
          connect: {
            id: accountId,
          },
        },
      };

      if (type === 'POST') {
        data.post = {
          connect: {
            id,
          },
        };
      }

      if (type === 'ARTICLE') {
        data.article = {
          connect: {
            id,
          },
        };
      }

      await this.prisma.like.create({
        data,
      });

      return 'LIKE';
    }
  }

  async getLikesByPostId(postId: string) {
    return this.prisma.like.findMany({
      where: {
        postId,
      },
    });
  }

  async getLikesByArticleId(articleId: string) {
    return this.prisma.like.findMany({
      where: {
        articleId,
      },
    });
  }

  async toggleLikeComment(commentId: string, accountId: string) {
    const like = await this.prisma.likeComment.findFirst({
      where: {
        commentId,
        accountId,
      },
    });

    if (like) {
      await this.prisma.likeComment.delete({
        where: {
          id: like.id,
        },
      });

      return 'UNLIKE';
    } else {
      await this.prisma.likeComment.create({
        data: {
          comment: {
            connect: {
              id: commentId,
            },
          },
          account: {
            connect: {
              id: accountId,
            },
          },
        },
      });

      return 'LIKE';
    }
  }
}
