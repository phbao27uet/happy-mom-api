import { Injectable } from '@nestjs/common';
import { PregnancyWeekDetail } from '@prisma/client';
import { PrismaService } from '@shared/prisma';

@Injectable()
export class PregnancyWeekDetailsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllByChild(childId: string): Promise<PregnancyWeekDetail[]> {
    return this.prisma.pregnancyWeekDetail.findMany({ where: { childId } });
  }

  async findOne(id: string): Promise<PregnancyWeekDetail | null> {
    return this.prisma.pregnancyWeekDetail.findUnique({ where: { id } });
  }

  async findOneByWeekOfChild(
    childId: string,
    weekNumber: number,
  ): Promise<PregnancyWeekDetail | null> {
    return this.prisma.pregnancyWeekDetail.findUnique({
      where: {
        childId_weekNumber: {
          childId,
          weekNumber,
        },
      },
    });
  }
}
