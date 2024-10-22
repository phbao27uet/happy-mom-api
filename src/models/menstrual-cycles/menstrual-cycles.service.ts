import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/shared/prisma/prisma.service'
import { GetMonthlyCycleDto } from './dto'

@Injectable()
export class MenstrualCyclesService {
  constructor(private readonly prisma: PrismaService) {}

  async calculateMonthCycles(getMonthlyCycleDto: GetMonthlyCycleDto) {}

  async getLatestUserCycle(accountId: string, month: string) {
    const startOfMonth = new Date(month)

    const latestCycleInMonth = await this.prisma.menstrualCycle.findFirst({
      where: {
        accountId,
        startDate: {
          gte: startOfMonth,
        },
      },
      orderBy: { startDate: 'desc' },
    })

    if (!latestCycleInMonth) {
      throw new NotFoundException(
        'Không tìm thấy thông tin chu kỳ của người dùng trong tháng',
      )
    }

    return latestCycleInMonth
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
    })
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
    })
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
