import { DefaultFindAllQueryDto } from '@models/base';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '@shared/prisma';
import { CreateArticleDto } from './dto';
import { UpdateArticleDto } from './dto/update.dto';

@Injectable()
export class ArticlesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(defaultFindAllQuery: DefaultFindAllQueryDto) {
    try {
      const { perPage = 20, page = 1 } = defaultFindAllQuery;

      const where: Prisma.ArticleWhereInput = {};

      const [total, data] = await Promise.all([
        this.prisma.article.count({
          where: where,
        }),
        this.prisma.article.findMany({
          where: where,
          orderBy: {
            createdAt: 'desc',
          },
          include: {
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
    return this.prisma.article.findUnique({
      where: {
        id,
      },
      include: {
        comments: true,
        likes: true,
        _count: {
          select: {
            comments: true,
            likes: true,
          },
        },
      },
    });
  }

  async findByCategory(categoryId: string) {
    return this.prisma.article.findMany({
      where: {
        subCategory: {
          categoryId,
        },
      },
    });
  }

  async findBySubCategory(subCategoryId: string) {
    return this.prisma.article.findMany({
      where: {
        subCategoryId,
      },
    });
  }

  async create(data: CreateArticleDto) {
    return this.prisma.article.create({
      data,
    });
  }

  async update(id: string, data: UpdateArticleDto) {
    return this.prisma.article.update({
      where: {
        id,
      },
      data,
    });
  }

  async remove(id: string) {
    return this.prisma.article.delete({
      where: {
        id,
      },
    });
  }
}
