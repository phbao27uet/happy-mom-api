import { Injectable, NotFoundException } from '@nestjs/common';
import { BabyMonitoring } from '@prisma/client';
import { PrismaService } from '@shared/prisma';

@Injectable()
export class BabyMonitoringsService {
  constructor(private readonly prisma: PrismaService) {}

  async findOneByChildId(childId: string): Promise<BabyMonitoring | null> {
    return this.prisma.babyMonitoring.findUnique({ where: { childId } });
  }

  async update(
    childId: string,
    data: Partial<BabyMonitoring>,
  ): Promise<BabyMonitoring> {
    const existingMonitoring = await this.findOneByChildId(childId);

    if (!existingMonitoring) {
      throw new NotFoundException(
        `BabyMonitoring with childId ${childId} not found.`,
      );
    }

    const updatedMonitoring = await this.prisma.babyMonitoring.update({
      where: { childId },
      data: {
        weight: data.weight,
        height: data.height,
        headCircumference: data.headCircumference,
        updatedAt: new Date(),
      },
    });

    return updatedMonitoring;
  }
}
