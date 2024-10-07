import { Injectable } from '@nestjs/common';
import { Subscription } from '@prisma/client';
import { PrismaService } from '@shared/prisma';

@Injectable()
export class SubscriptionsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Subscription[]> {
    return this.prisma.subscription.findMany({
      include: {
        features: true,
      },
    });
  }

  async findOne(id: string): Promise<Subscription | null> {
    return this.prisma.subscription.findUnique({
      where: { id },
      include: {
        features: true,
      },
    });
  }
}
