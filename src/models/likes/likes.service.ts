import { Injectable } from '@nestjs/common';
import { PrismaService } from '@shared/prisma';

@Injectable()
export class LikesService {
  constructor(private readonly prisma: PrismaService) {}

  async toggleLikePost(postId: string, accountId: string) {
    const like = await this.prisma.like.findFirst({
      where: {
        postId,
        accountId,
      },
    });

    if (like) {
      await this.prisma.like.delete({
        where: {
          id: like.id,
        },
      });

      return 'UNLIKE';
    } else {
      await this.prisma.like.create({
        data: {
          post: {
            connect: {
              id: postId,
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

  async getLikesByPostId(postId: string) {
    return this.prisma.like.findMany({
      where: {
        postId,
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
