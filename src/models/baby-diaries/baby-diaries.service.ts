import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateDiaryDto, GetListDiaryDto, UpdateDiaryDto } from './dto';

@Injectable()
export class BabyDiariesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(defaultFindAllQuery: GetListDiaryDto) {
    const { perPage = 20, page = 1, childId } = defaultFindAllQuery;

    const where: Prisma.BabyDiaryWhereInput = { childId };

    const [total, data] = await Promise.all([
      this.prisma.babyDiary.count({
        where: where,
      }),
      this.prisma.babyDiary.findMany({
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
    return this.prisma.babyDiary.findUnique({
      where: {
        id,
      },
      include: {
        author: true,
      },
    });
  }

  async create(currentId: string, createDiaryDto: CreateDiaryDto) {
    const res = await this.prisma.babyDiary.create({
      data: {
        images: createDiaryDto.images,
        content: createDiaryDto.content,
        childId: createDiaryDto.childId,
        authorId: currentId,
      },
    });

    return res;
  }

  async remove(id: string) {
    return this.prisma.babyDiary.delete({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateDiaryDto: UpdateDiaryDto) {
    return this.prisma.babyDiary.update({
      where: {
        id,
      },
      data: {
        images: updateDiaryDto.images,
        content: updateDiaryDto.content,
      },
    });
  }
}
