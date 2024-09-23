import { Injectable } from '@nestjs/common';
import { CreateEntryDto } from '../dto';
import { BabyTrackingType } from '@prisma/client';
import { PrismaService } from '@shared/prisma';
import { GetBabyTrackingDto } from '../dto/get.dto';

@Injectable()
export class BabyTrackingService {
  constructor(private prisma: PrismaService) {}

  private relationNameMap: Record<BabyTrackingType, string> = {
    [BabyTrackingType.PUMPING]: 'pumpingEntry',
    [BabyTrackingType.FEEDING]: 'feedingEntry',
    [BabyTrackingType.DIAPER]: 'diaperEntry',
    [BabyTrackingType.SLEEP]: 'sleepEntry',
    [BabyTrackingType.SOLID_FOOD]: 'solidFoodEntry',
  };

  async create(createEntryDto: CreateEntryDto) {
    const {
      data: { type, data, ...rest },
    } = createEntryDto;

    return this.prisma.babyTracking.create({
      data: {
        type,
        [this.relationNameMap[type]]: {
          create: data,
        },
        ...rest,
      },
      include: {
        [this.relationNameMap[type]]: true,
      },
    });
  }

  async findAll(dto?: GetBabyTrackingDto) {
    const where = dto?.type ? { type: dto.type } : {};
    const res = await this.prisma.babyTracking.findMany({
      where,
      include: {
        pumpingEntry: true,
        feedingEntry: true,
        diaperEntry: true,
        sleepEntry: true,
        solidFoodEntry: true,
      },
    });

    return res;
  }

  async findOne(id: string) {
    return this.prisma.babyTracking.findUnique({
      where: { id },
      include: {
        pumpingEntry: true,
        feedingEntry: true,
        diaperEntry: true,
        sleepEntry: true,
        solidFoodEntry: true,
      },
    });
  }

  // async update(id: string, updateEntryDto: UpdateEntryDto) {
  //   const { type, ...rest } = updateEntryDto;
  //   return this.prisma.babyTracking.update({
  //     where: { id },
  //     data: {
  //       [this.relationNameMap[type]]: {
  //         update: rest,
  //       },
  //     },
  //     include: {
  //       [this.relationNameMap[type]]: true,
  //     },
  //   });
  // }

  async remove(id: string) {
    return this.prisma.babyTracking.delete({
      where: { id },
    });
  }
}
