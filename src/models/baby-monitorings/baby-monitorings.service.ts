import { Injectable } from '@nestjs/common';
import { BabyMonitoring } from '@prisma/client';
import { PrismaService } from '@shared/prisma';

@Injectable()
export class BabyMonitoringsService {
  constructor(private readonly prisma: PrismaService) {}

  async findOneByChildId(childId: string): Promise<BabyMonitoring | null> {
    return this.prisma.babyMonitoring.findUnique({ where: { childId } });
  }

  async updateOrCreateByChildId(
    childId: string,
    data: Partial<BabyMonitoring>,
  ): Promise<BabyMonitoring> {
    const existingMonitoring = await this.findOneByChildId(childId);

    if (!existingMonitoring) {
      const createData = {
        ...data,
        childId,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      return this.prisma.babyMonitoring.create({
        data: createData,
      });
    }

    const updateData = {
      ...data,
      updatedAt: new Date(),
    };

    return this.prisma.babyMonitoring.update({
      where: { childId },
      data: updateData,
    });
  }
}
