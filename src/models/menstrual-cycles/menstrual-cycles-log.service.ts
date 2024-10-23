import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { endOfMonth, parse, startOfMonth } from 'date-fns'
import { PrismaService } from 'src/shared/prisma/prisma.service'
import { CreateLogCycleDto, GetLogCycleDto, UpdateLogCycleDto } from './dto'

@Injectable()
export class MenstrualCyclesLogService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(accountId: string, defaultFindAllQuery: GetLogCycleDto) {
    const { perPage = 20, page = 1, monthYear } = defaultFindAllQuery

    const [month, year] = monthYear.split('-')
    const requestedMonth = parse(`${month}-${year}`, 'MM-yyyy', new Date())

    const monthStart = startOfMonth(requestedMonth)
    const monthEnd = endOfMonth(requestedMonth)
    const where: Prisma.MenstrualCycleLogWhereInput = {
      accountId,
      date: {
        gte: monthStart,
        lte: monthEnd,
      },
    }

    const [total, data] = await Promise.all([
      this.prisma.menstrualCycleLog.count({
        where: where,
      }),
      this.prisma.menstrualCycleLog.findMany({
        where: where,
        orderBy: {
          date: 'desc',
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

  /**
   * Tính toán các chu kỳ trong tháng
   * @param accountId ID tài khoản
   * @param getMonthlyCycleDto Thông tin tháng cần tính
   * @returns Các chu kỳ trong tháng
   */

  async getLogCycle(id: string) {
    return this.prisma.menstrualCycleLog.findUniqueOrThrow({
      where: {
        id,
      },
    })
  }

  async deleteLogCycle(id: string) {
    return this.prisma.menstrualCycleLog.delete({
      where: {
        id,
      },
    })
  }

  async updateLogCycle(id: string, updateLogCycleDto: UpdateLogCycleDto) {
    return this.prisma.menstrualCycleLog.update({
      where: { id },
      data: updateLogCycleDto,
    })
  }

  async createLogCycle(
    accountId: string,
    createLogCycleDto: CreateLogCycleDto,
  ) {
    return this.prisma.menstrualCycleLog.create({
      data: { ...createLogCycleDto, accountId },
    })
  }
}
