import { Injectable } from '@nestjs/common';
import { CreateEntryDto } from '../dto';
import { BabyTrackingType, Prisma } from '@prisma/client';
import { PrismaService } from '@shared/prisma';
import { GetBabyTrackingDto, GetHistoryDto } from '../dto';
import { groupBy } from 'lodash';
import {
  BabyTrackingWithDiaper,
  BabyTrackingWithDiaperRecord,
  BabyTrackingWithFeeding,
  BabyTrackingWithFeedingRecord,
  BabyTrackingWithPumping,
  BabyTrackingWithPumpingRecord,
  BabyTrackingWithSleeping,
  BabyTrackingWithSleepingRecord,
  DiaperService,
  FeedingService,
  PumpingService,
  SleepingService,
} from '.';

@Injectable()
export class BabyTrackingService {
  constructor(
    private prisma: PrismaService,
    private pumpingService: PumpingService,
    private sleepingService: SleepingService,
    private feedingService: FeedingService,
    private diaperService: DiaperService,
  ) {}

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

  async findAll(dto: GetBabyTrackingDto) {
    const where: Prisma.BabyTrackingWhereInput = {
      type: dto.type,
      childId: dto.childId,
    };

    if (dto.startDate && dto.endDate) {
      where.date = {
        gte: new Date(dto.startDate),
        lte: new Date(dto.endDate),
      };
    }

    const res = await this.prisma.babyTracking.findMany({
      where,
      include: {
        [this.relationNameMap[dto.type]]: true,
      },
    });

    const groupByDate = groupBy(res, (entry) => {
      if (dto.queryType === 'DAY') {
        return entry.date.toISOString().split('T')[0];
      } else if (dto.queryType === 'MONTH') {
        return entry.date.toISOString().split('T')[0].slice(0, 7);
      } else {
        return entry.date.toISOString().split('T')[0].slice(0, 4);
      }
    });

    switch (dto.type) {
      case BabyTrackingType.PUMPING:
        return this.pumpingService.formatData(
          groupByDate as unknown as BabyTrackingWithPumpingRecord,
        );
      case BabyTrackingType.SLEEP:
        return this.sleepingService.formatData(
          groupByDate as unknown as BabyTrackingWithSleepingRecord,
        );
      case BabyTrackingType.FEEDING:
        return this.feedingService.formatData(
          groupByDate as unknown as BabyTrackingWithFeedingRecord,
        );
      case BabyTrackingType.DIAPER:
        return this.diaperService.formatData(
          groupByDate as unknown as BabyTrackingWithDiaperRecord,
        );
      default:
        return groupByDate;
    }
  }

  async findHistory(dto: GetHistoryDto) {
    const where: Prisma.BabyTrackingWhereInput = {
      type: dto.type,
      childId: dto.childId,
      date: {
        gte: new Date(dto.year),
        lt: new Date(Number(dto.year) + 1, 0, 1),
      },
    };

    const res = await this.prisma.babyTracking.findMany({
      where,
      include: {
        [this.relationNameMap[dto.type]]: true,
      },
    });

    switch (dto.type) {
      case BabyTrackingType.PUMPING:
        return this.pumpingService.history(
          res as unknown as BabyTrackingWithPumping,
        );
      case BabyTrackingType.SLEEP:
        return this.sleepingService.history(
          res as unknown as BabyTrackingWithSleeping,
        );
      case BabyTrackingType.FEEDING:
        return this.feedingService.history(
          res as unknown as BabyTrackingWithFeeding,
        );
      case BabyTrackingType.DIAPER:
        return this.diaperService.history(
          res as unknown as BabyTrackingWithDiaper,
        );
      default:
        return res;
    }
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
