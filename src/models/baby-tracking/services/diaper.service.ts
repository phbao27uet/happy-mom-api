import { Injectable } from '@nestjs/common';
import { CreateDiaperDto, UpdateDiaperDto } from './dto';
import { PrismaService } from '@shared/prisma';

@Injectable()
export class DiaperService {
  constructor(private prisma: PrismaService) {}

  async create(createDiaperDto: CreateDiaperDto) {
    const { note, imageUrl, reason, time, ...rest } = createDiaperDto;
    return this.prisma.baseEntry.create({
      data: {
        date: new Date(),
        note,
        imageUrl,
        diaperEntry: {
          create: {
            reason,
            time,
          },
        },
        ...rest,
      },
      include: {
        diaperEntry: true,
      },
    });
  }

  async findAll() {
    return this.prisma.baseEntry.findMany({
      where: {
        diaperEntry: {
          isNot: null,
        },
      },
      include: {
        diaperEntry: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.baseEntry.findUnique({
      where: { id },
      include: {
        diaperEntry: true,
      },
    });
  }

  async update(id: string, updateDiaperDto: UpdateDiaperDto) {
    const { note, imageUrl, reason, time, ...rest } = updateDiaperDto;
    return this.prisma.baseEntry.update({
      where: { id },
      data: {
        note,
        imageUrl,
        diaperEntry: {
          update: {
            reason,
            time,
          },
        },
        ...rest,
      },
      include: {
        diaperEntry: true,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.baseEntry.delete({
      where: { id },
    });
  }
}
