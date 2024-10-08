import { DefaultFindAllQueryDto } from '@models/base'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from '@shared/prisma'
import { CreateRecipeDto } from './dto'
import { UpdateRecipeDto } from './dto/update.dto'

@Injectable()
export class RecipesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(defaultFindAllQuery: DefaultFindAllQueryDto) {
    const { perPage = 20, page = 1, searchOne } = defaultFindAllQuery

    const where: Prisma.RecipeWhereInput = {
      title: {
        contains: searchOne,
        mode: 'insensitive',
      },
    }

    const [total, data] = await Promise.all([
      this.prisma.recipe.count({
        where: where,
      }),
      this.prisma.recipe.findMany({
        where: where,
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          subCategories: {
            include: {
              category: true,
            },
          },
        },
        skip: page && perPage ? (page - 1) * perPage : undefined,
        take: page && perPage ? perPage : undefined,
      }),
    ])

    return {
      data: data,
      meta: {
        currentPage: page,
        perPage,
        total: total ?? 0,
        totalPages: Math.ceil((total ?? 0) / perPage),
      },
    }
  }

  async findOne(id: string) {
    return this.prisma.recipe.findUnique({
      where: {
        id,
      },
      include: {
        subCategories: {
          include: {
            category: true,
          },
        },
      },
    })
  }

  async findByCategory(
    categoryId: string,
    defaultFindAllQuery: DefaultFindAllQueryDto,
  ) {
    const { perPage = 20, page = 1, searchOne } = defaultFindAllQuery

    const where: Prisma.RecipeWhereInput = {
      title: {
        contains: searchOne,
        mode: 'insensitive',
      },
      subCategories: {
        some: {
          categoryId,
        },
      },
    }

    const [total, data] = await Promise.all([
      this.prisma.recipe.count({
        where: where,
      }),
      this.prisma.recipe.findMany({
        where: where,
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          subCategories: {
            include: {
              category: true,
            },
          },
        },
        skip: page && perPage ? (page - 1) * perPage : undefined,
        take: page && perPage ? perPage : undefined,
      }),
    ])

    return {
      data: data,
      meta: {
        currentPage: page,
        perPage,
        total: total ?? 0,
        totalPages: Math.ceil((total ?? 0) / perPage),
      },
    }
  }

  async findBySubCategory(
    subCategoryId: string,
    defaultFindAllQuery: DefaultFindAllQueryDto,
  ) {
    const { perPage = 20, page = 1, searchOne } = defaultFindAllQuery

    const where: Prisma.RecipeWhereInput = {
      title: {
        contains: searchOne,
        mode: 'insensitive',
      },
      subCategories: {
        some: {
          id: subCategoryId,
        },
      },
    }

    const [total, data] = await Promise.all([
      this.prisma.recipe.count({
        where: where,
      }),
      this.prisma.recipe.findMany({
        where: where,
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          subCategories: {
            include: {
              category: true,
            },
          },
        },
        skip: page && perPage ? (page - 1) * perPage : undefined,
        take: page && perPage ? perPage : undefined,
      }),
    ])

    return {
      data: data,
      meta: {
        currentPage: page,
        perPage,
        total: total ?? 0,
        totalPages: Math.ceil((total ?? 0) / perPage),
      },
    }
  }

  async create(data: CreateRecipeDto) {
    return this.prisma.recipe.create({
      data,
    })
  }

  async update(id: string, data: UpdateRecipeDto) {
    return this.prisma.recipe.update({
      where: {
        id,
      },
      data,
    })
  }

  async remove(id: string) {
    return this.prisma.recipe.delete({
      where: {
        id,
      },
    })
  }
}
