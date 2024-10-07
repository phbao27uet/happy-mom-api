import { Module } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { SubscriptionsController } from './subscriptions.controller';
import { PrismaService } from '@shared/prisma';

@Module({
  controllers: [SubscriptionsController],
  providers: [SubscriptionsService, PrismaService],
})
export class SubscriptionsModule {}
