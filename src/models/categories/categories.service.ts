import { Injectable } from '@nestjs/common';
import { PrismaService } from '@shared/prisma';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async getCategories() {
    return this.prisma.category.findMany();
  }

  async getSubCategories(categoryId: string) {
    return this.prisma.subCategory.findMany({
      where: {
        categoryId,
      },
    });
  }
}
