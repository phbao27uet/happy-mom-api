import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { DefaultFindAllQueryDto } from '@models/base';

@Injectable()
export class EarlyEducationsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(defaultFindAllQuery: DefaultFindAllQueryDto) {
    const { perPage = 20, page = 1, searchOne } = defaultFindAllQuery;

    const where: Prisma.EarlyEducationWhereInput = {
      title: {
        contains: searchOne,
        mode: 'insensitive',
      },
    };

    const [total, data] = await Promise.all([
      this.prisma.earlyEducation.count({
        where,
      }),
      this.prisma.earlyEducation.findMany({
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
    const res = await this.prisma.earlyEducation.findUnique({
      where: {
        id,
      },
    });

    if (!res) {
      throw new NotFoundException('Early education not found');
    }

    return res;
  }
}
