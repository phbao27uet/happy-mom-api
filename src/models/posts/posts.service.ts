import { DefaultFindAllQueryDto } from '@models/base';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreatePostDto } from './dto';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(defaultFindAllQuery: DefaultFindAllQueryDto) {
    try {
      const { perPage = 20, page = 1 } = defaultFindAllQuery;

      const where: Prisma.PostWhereInput = {};

      const [total, data] = await Promise.all([
        this.prisma.post.count({
          where: where,
        }),
        this.prisma.post.findMany({
          where: where,
          orderBy: {
            createdAt: 'desc',
          },
          include: {
            author: {
              select: {
                id: true,
                username: true,
              },
            },
            comments: {
              orderBy: {
                createdAt: 'asc',
              },
              where: {
                parent: {
                  is: null,
                },
              },
              include: {
                author: {
                  select: {
                    id: true,
                    username: true,
                  },
                },
                childrens: {
                  include: {
                    author: {
                      select: {
                        id: true,
                        username: true,
                      },
                    },

                    childrens: {
                      include: {
                        author: {
                          select: {
                            id: true,
                            username: true,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            likes: true,
            group: true,
            _count: {
              select: {
                comments: true,
                likes: true,
              },
            },
          },
          skip: page && perPage ? (page - 1) * perPage : undefined,
          take: page && perPage ? perPage : undefined,
        }),
      ]);

      return {
        data: data,
        meta: {
          currentPage: page,
          perPage,
          total: total ?? 0,
          totalPages: Math.ceil((total ?? 0) / perPage),
        },
      };
    } catch (e) {
      console.log(e);
    }
  }

  async findOne(id: string) {
    return this.prisma.post.findUnique({
      where: {
        id,
      },
      include: {
        author: true,
        comments: true,
        likes: true,
        group: true,
        _count: {
          select: {
            comments: true,
            likes: true,
          },
        },
      },
    });
  }

  async create(currentId: string, createPostDto: CreatePostDto) {
    const res = await this.prisma.post.create({
      data: {
        images: createPostDto.images,
        content: createPostDto.content,
        groupId: createPostDto.groupId,
        authorId: currentId,
      },
    });

    return res;
  }

  async remove(id: string) {
    return this.prisma.post.delete({
      where: {
        id,
      },
    });
  }

  async update(id: string, updatePostDto: CreatePostDto) {
    return this.prisma.post.update({
      where: {
        id,
      },
      data: {
        images: updatePostDto.images,
        content: updatePostDto.content,
      },
    });
  }
}
