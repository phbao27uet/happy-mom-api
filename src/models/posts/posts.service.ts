import { DefaultFindAllQueryDto } from '@models/base';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreatePostDto } from './dto';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(defaultFindAllQuery: DefaultFindAllQueryDto) {
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
    // const res = await this.prisma.post.create({
    //   data: {
    //     authorId: currentId,
    //     images: createPostDto.images,
    //     content: createPostDto.content,
    //   },
    // });
  }
}
