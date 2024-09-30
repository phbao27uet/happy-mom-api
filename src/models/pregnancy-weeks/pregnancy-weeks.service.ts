import { Injectable } from '@nestjs/common';
import { PregnancyWeek } from '@prisma/client';
import { PrismaService } from '@shared/prisma';

@Injectable()
export class PregnancyWeeksService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllByChild(childId: string): Promise<PregnancyWeek[]> {
    return this.prisma.pregnancyWeek.findMany({ where: { childId } });
  }

  async findOne(id: string): Promise<PregnancyWeek | null> {
    return this.prisma.pregnancyWeek.findUnique({ where: { id } });
  }

  async findOneByWeekOfChild(
    childId: string,
    weekNumber: number,
  ): Promise<PregnancyWeek | null> {
    return this.prisma.pregnancyWeek.findUnique({
      where: {
        childId_weekNumber: {
          childId,
          weekNumber,
        },
      },
    });
  }
}
