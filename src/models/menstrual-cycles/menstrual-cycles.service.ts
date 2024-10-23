import { DefaultFindAllQueryDto } from '@models/base'
import { Injectable, NotFoundException } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import {
  addDays,
  addMonths,
  endOfMonth,
  format,
  isWithinInterval,
  parse,
  parseISO,
  startOfMonth,
  subDays,
  subMonths,
} from 'date-fns'
import { PrismaService } from 'src/shared/prisma/prisma.service'
import { GetMonthlyCycleDto, SettingDto, UpdateSettingDto } from './dto'
import { ICycle } from './interfaces'

@Injectable()
export class MenstrualCyclesService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly ADD_PERIOD_DURATION = 2
  private readonly MIN_PERIOD_DURATION = 3

  /**
   * Tính toán các chu kỳ trong tháng
   * @param accountId ID tài khoản
   * @param getMonthlyCycleDto Thông tin tháng cần tính
   * @returns Các chu kỳ trong tháng
   */
  async calculateMonthCycles(
    accountId: string,
    getMonthlyCycleDto: GetMonthlyCycleDto,
  ) {
    const { monthYear } = getMonthlyCycleDto

    const [month, year] = monthYear.split('-')
    const requestedMonth = parse(`${month}-${year}`, 'MM-yyyy', new Date())

    const monthStart = startOfMonth(requestedMonth)
    const monthEnd = endOfMonth(requestedMonth)

    const latestCycleInMonth = await this.getLatestUserCycle(
      accountId,
      monthStart,
      monthEnd,
    )

    const cycles = this.calculateCyclesInRange(
      latestCycleInMonth,
      monthStart,
      monthEnd,
    )

    return {
      month: format(requestedMonth, 'MM-yyyy'),
      latestCycleInMonth,
      cycles: cycles,
    }
  }

  /**
   * Lấy chu kỳ gần nhất của người dùng trong tháng
   * @param accountId ID tài khoản
   * @param monthStart Ngày bắt đầu tháng
   * @param monthEnd Ngày kết thúc tháng
   * @returns Chu kỳ gần nhất
   */
  async getLatestUserCycle(
    accountId: string,
    monthStart: Date,
    monthEnd: Date,
  ) {
    const latestCycleInMonth = await this.prisma.menstrualCycle.findFirst({
      where: {
        accountId,
        OR: [
          {
            startDate: {
              lte: monthStart,
            },
          },
          {
            startDate: {
              gte: monthStart,
              lte: monthEnd,
            },
          },
        ],
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

  /**
   * Tính toán các chu kỳ có thể xuất hiện trong khoảng thời gian
   * @param latestCycle Chu kỳ gần nhất
   * @param monthStart Ngày bắt đầu tháng
   * @param monthEnd Ngày kết thúc tháng
   * @returns Các chu kỳ có thể xuất hiện trong khoảng thời gian
   */
  private calculateCyclesInRange(
    latestCycle: {
      startDate: Date
      cycleDuration: number
      periodDuration: number
    },
    monthStart: Date,
    monthEnd: Date,
  ): ICycle[] {
    const prevMonthStart = startOfMonth(subMonths(monthStart, 1))
    const nextMonthEnd = endOfMonth(addMonths(monthEnd, 1))

    const cycles: ICycle[] = []
    let currentDate = parseISO(latestCycle.startDate.toISOString())

    // Nếu ngày bắt đầu chu kỳ gần nhất nằm trước tháng cần tính,
    // di chuyển đến chu kỳ đầu tiên trong tháng
    while (currentDate < prevMonthStart) {
      currentDate = addDays(currentDate, latestCycle.cycleDuration)
    }

    // Tính tất cả các chu kỳ có thể xuất hiện trong tháng (+/- 1 tháng để xử lý trường hợp ngày bắt đầu chu kỳ nằm trước tháng cần tính)
    while (currentDate <= nextMonthEnd) {
      let adjustedPeriodDuration = latestCycle.periodDuration

      // Nếu chu kỳ này không phải là latestCycle và periodDuration < 3 (this.MIN_PERIOD_DURATION), thì cộng thêm 2 (this.ADD_PERIOD_DURATION)
      if (
        currentDate > latestCycle.startDate &&
        latestCycle.periodDuration < this.MIN_PERIOD_DURATION
      ) {
        adjustedPeriodDuration =
          latestCycle.periodDuration + this.ADD_PERIOD_DURATION
      }

      const cycleEndDate = addDays(currentDate, adjustedPeriodDuration - 1)
      const ovulationDate = subDays(
        addDays(currentDate, latestCycle.cycleDuration - 1),
        14,
      )

      const cycle: ICycle = {
        menstruationStartDate: format(currentDate, 'dd/MM/yyyy'),
        menstruationEndDate: format(cycleEndDate, 'dd/MM/yyyy'),
        ovulationDate: format(ovulationDate, 'dd/MM/yyyy'),
        fertile: this.calculateFertilityWindow(ovulationDate),
      }

      // Kiểm tra xem chu kỳ có liên quan đến tháng được yêu cầu không
      if (
        isWithinInterval(currentDate, { start: monthStart, end: monthEnd }) ||
        isWithinInterval(cycleEndDate, { start: monthStart, end: monthEnd }) ||
        isWithinInterval(ovulationDate, { start: monthStart, end: monthEnd }) ||
        isWithinInterval(parseISO(cycle.fertile.fertileStart), {
          start: monthStart,
          end: monthEnd,
        }) ||
        isWithinInterval(parseISO(cycle.fertile.fertileEnd), {
          start: monthStart,
          end: monthEnd,
        })
      ) {
        cycles.push(cycle)
      }

      // Di chuyển đến chu kỳ tiếp theo
      currentDate = addDays(currentDate, latestCycle.cycleDuration)
    }

    return cycles
  }

  /**
   * Tính toán những ngày dễ thụ thai
   * @param ovulationDate Ngày trứng rụng
   * @returns Những ngày dễ thụ thai
   */
  private calculateFertilityWindow(ovulationDate: Date) {
    const fertileStart = subDays(ovulationDate, 3)
    const fertileEnd = addDays(ovulationDate, 2)

    return {
      fertileStart: format(fertileStart, 'dd/MM/yyyy'),
      fertileEnd: format(fertileEnd, 'dd/MM/yyyy'),
      ovulationDate: format(ovulationDate, 'dd/MM/yyyy'),
    }
  }

  async findAll(
    accountId: string,
    defaultFindAllQuery: DefaultFindAllQueryDto,
  ) {
    const { perPage = 20, page = 1 } = defaultFindAllQuery

    const where: Prisma.MenstrualCycleWhereInput = {
      accountId,
    }

    const [total, data] = await Promise.all([
      this.prisma.menstrualCycle.count({
        where: where,
      }),
      this.prisma.menstrualCycle.findMany({
        where: where,
        orderBy: {
          createdAt: 'desc',
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
    return this.prisma.menstrualCycle.findUniqueOrThrow({
      where: { id },
    })
  }

  /**
   * Lưu thông tin cài đặt chu kỳ kinh nguyệt
   * @param accountId ID tài khoản
   * @param settingDto Thông tin cài đặt
   * @returns Thông tin cài đặt
   */
  async create(accountId: string, settingDto: SettingDto) {
    return this.prisma.menstrualCycle.create({
      data: { ...settingDto, accountId },
    })
  }

  async update(id: string, settingDto: UpdateSettingDto) {
    return this.prisma.menstrualCycle.update({
      where: { id },
      data: settingDto,
    })
  }

  async delete(id: string) {
    return this.prisma.menstrualCycle.delete({
      where: { id },
    })
  }
}
