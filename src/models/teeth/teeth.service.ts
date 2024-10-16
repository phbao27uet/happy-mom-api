import { Injectable } from '@nestjs/common'
import { groupBy } from 'lodash'
import { PrismaService } from 'src/shared/prisma/prisma.service'
import { CreateToothGrowthDto, GetTeethDto } from './dto'

@Injectable()
export class TeethService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const data = await this.prisma.toothMaster.findMany({})
    const teethGroupByPosition = groupBy(data, 'jawPosition')

    return teethGroupByPosition
  }

  async findOne(id: string, getTeethDto: GetTeethDto) {
    const tm = await this.prisma.toothMaster.findUniqueOrThrow({
      where: {
        id,
      },
    })

    const tg = await this.prisma.toothGrowth.findUniqueOrThrow({
      where: {
        toothId_childId: {
          toothId: tm.id,
          childId: getTeethDto.childId,
        },
      },
      include: {
        tooth: true,
      },
    })

    return tg
  }

  async createForChild(toothId: string, createDto: CreateToothGrowthDto) {
    const tm = await this.prisma.toothMaster.findUniqueOrThrow({
      where: {
        id: toothId,
      },
    })

    const toothGrowth = await this.prisma.toothGrowth.upsert({
      where: {
        toothId_childId: {
          toothId: tm.id,
          childId: createDto.childId,
        },
      },
      create: {
        ...createDto,
        childId: createDto.childId,
        toothId: tm.id,
      },
      update: {
        ...createDto,
      },
    })

    return toothGrowth
  }
}
