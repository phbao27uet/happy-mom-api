import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { GetListMedicineDto } from './dto';

@Injectable()
export class MedicinesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(defaultFindAllQuery: GetListMedicineDto) {
    const {
      perPage = 20,
      page = 1,
      firstCharacter,
      searchOne,
    } = defaultFindAllQuery;

    const where: Prisma.MedicineWhereInput = {
      name: {
        contains: searchOne,
        startsWith: firstCharacter,
        mode: 'insensitive',
      },
    };

    const [total, data] = await Promise.all([
      this.prisma.medicine.count({
        where: where,
      }),
      this.prisma.medicine.findMany({
        where: where,
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
    return this.prisma.medicine.findUnique({
      where: {
        id,
      },
    });
  }
}
