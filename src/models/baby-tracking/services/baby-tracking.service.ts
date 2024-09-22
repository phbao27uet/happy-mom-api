import { Injectable } from '@nestjs/common';
import { CreateEntryDto, UpdateEntryDto } from './dto';
import { EntryType } from '@prisma/client';
import { PrismaService } from '@shared/prisma';

@Injectable()
export class BabyTrackingService {
  constructor(private prisma: PrismaService) {}

  private relationNameMap: Record<EntryType, string> = {
    [EntryType.PUMPING]: 'pumpingEntry',
    [EntryType.FEEDING]: 'feedingEntry',
    [EntryType.DIAPER]: 'diaperEntry',
    [EntryType.SLEEP]: 'sleepEntry',
    [EntryType.SOLID_FOOD]: 'solidFoodEntry',
  };

  async create(createEntryDto: CreateEntryDto) {
    const { type, childId, ...rest } = createEntryDto;
    return this.prisma.baseEntry.create({
      data: {
        type,
        childId,
        date: new Date(),
        [this.relationNameMap[type]]: {
          create: rest,
        },
      },
      include: {
        [this.relationNameMap[type]]: true,
      },
    });
  }

  async findAll(type?: EntryType) {
    const where = type ? { type } : {};
    return this.prisma.baseEntry.findMany({
      where,
      include: {
        pumpingEntry: true,
        feedingEntry: true,
        diaperEntry: true,
        sleepEntry: true,
        // solidFoodEntry: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.baseEntry.findUnique({
      where: { id },
      include: {
        pumpingEntry: true,
        feedingEntry: true,
        diaperEntry: true,
        sleepEntry: true,
        // solidFoodEntry: true,
      },
    });
  }

  async update(id: string, updateEntryDto: UpdateEntryDto) {
    const { type, ...rest } = updateEntryDto;
    return this.prisma.baseEntry.update({
      where: { id },
      data: {
        [this.relationNameMap[type]]: {
          update: rest,
        },
      },
      include: {
        [this.relationNameMap[type]]: true,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.baseEntry.delete({
      where: { id },
    });
  }
}
