import { Injectable } from '@nestjs/common'
import { PrismaService } from '@shared/prisma'
import { GetCategoryDto } from './dto'

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async getCategories(queryDto: GetCategoryDto) {
    return this.prisma.category.findMany({
      where: {
        type: queryDto.type,
      },
      include: {
        subCategories: {
          include: {
            recipes: {
              select: {
                id: true,
                title: true,
                description: true,
                thumbnail: true,
                cookingTime: true,
              },
            },
            _count: {
              select: {
                recipes: true,
              },
            },
          },
        },
      },
    })
  }

  async getSubCategories(categoryId: string) {
    return this.prisma.subCategory.findMany({
      where: {
        categoryId,
      },
    })
  }
}
