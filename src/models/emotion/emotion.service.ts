import { Injectable } from '@nestjs/common'
import { format } from 'date-fns'
import { groupBy } from 'lodash'
import { PrismaService } from 'src/shared/prisma/prisma.service'
import { CreateEmotionDto, GetListEmotionDto } from './dto'

@Injectable()
export class EmotionService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(getListDto: GetListEmotionDto) {
    const data = await this.prisma.emotionLog.findMany({
      where: {
        childId: getListDto.childId,
        date: {
          gte: getListDto.startDate,
          lte: getListDto.endDate,
        },
      },
    })

    const dataGroupByDate = groupBy(data, (item) =>
      format(new Date(item.date), 'yyyy-MM-dd'),
    )

    return dataGroupByDate
  }

  async findOne(id: string) {
    const res = await this.prisma.emotionLog.findUniqueOrThrow({
      where: {
        id,
      },
    })

    return res
  }

  async createOrUpdate(createDto: CreateEmotionDto) {
    return this.prisma.emotionLog.upsert({
      where: {
        date_childId: {
          date: createDto.date,
          childId: createDto.childId,
        },
      },
      create: {
        ...createDto,
      },
      update: {
        emotion: createDto.emotion,
      },
    })
  }
}
