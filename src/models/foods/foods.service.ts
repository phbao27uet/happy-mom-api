import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { DefaultFindAllQueryDto } from '@models/base';
import { GetListFoodDto } from './dto';

@Injectable()
export class FoodsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(defaultFindAllQuery: GetListFoodDto) {
    const {
      perPage = 20,
      page = 1,
      foodCategoryId,
      searchOne,
    } = defaultFindAllQuery;

    const where: Prisma.FoodWhereInput = {
      foodCategoryId,

      name: {
        contains: searchOne,
        mode: 'insensitive',
      },
    };

    const [total, data] = await Promise.all([
      this.prisma.food.count({
        where,
      }),
      this.prisma.food.findMany({
        where,
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          foodCategory: true,
          guidelines: true,
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

  async findAllFoodCategories(defaultFindAllQuery: DefaultFindAllQueryDto) {
    const { perPage = 20, page = 1 } = defaultFindAllQuery;

    const where: Prisma.FoodCategoryWhereInput = {};

    const [total, data] = await Promise.all([
      this.prisma.foodCategory.count({
        where,
      }),
      this.prisma.foodCategory.findMany({
        where,
        orderBy: {
          createdAt: 'desc',
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
    return this.prisma.food.findUnique({
      where: {
        id,
      },
      include: {
        foodCategory: true,
        guidelines: true,
      },
    });
  }

  // async create(currentId: string, createDiaryDto: CreateDiaryDto) {
  //   const res = await this.prisma.food.create({
  //     data: {
  //       images: createDiaryDto.images,
  //       content: createDiaryDto.content,
  //       childId: createDiaryDto.childId,
  //       authorId: currentId,
  //     },
  //   });

  //   return res;
  // }

  async remove(id: string) {
    return this.prisma.food.delete({
      where: {
        id,
      },
    });
  }

  // async update(id: string, updateDiaryDto: UpdateDiaryDto) {
  //   return this.prisma.food.update({
  //     where: {
  //       id,
  //     },
  //     data: {
  //       images: updateDiaryDto.images,
  //       content: updateDiaryDto.content,
  //     },
  //   });
  // }
}
