import { Controller, Get, Param } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { Subscription } from '@prisma/client';
import { Auth } from '@shared/decorators';

@Auth('USER', 'ADMIN')
@Controller('subscriptions')
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  @Get('')
  async findAll(): Promise<Subscription[]> {
    return this.subscriptionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Subscription | null> {
    return this.subscriptionsService.findOne(id);
  }
}
