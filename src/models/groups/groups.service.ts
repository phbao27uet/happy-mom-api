import { DefaultFindAllQueryDto } from '@models/base';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Injectable()
export class GroupsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(defaultFindAllQuery: DefaultFindAllQueryDto) {
    const { perPage = 20, page = 1 } = defaultFindAllQuery;

    const where: Prisma.GroupWhereInput = {};

    const [total, data] = await Promise.all([
      this.prisma.group.count({
        where: where,
      }),
      this.prisma.group.findMany({
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

  async getOptions() {
    const groups = await this.prisma.group.findMany({});

    return groups.map((group) => ({
      value: group.id,
      label: group.name,
      data: group,
    }));
  }
}
