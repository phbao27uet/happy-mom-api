import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { Auth } from '@shared/decorators';
import { BabyMonitoring } from '@prisma/client';
import { BabyMonitoringsService } from './baby-monitorings.service';

@Controller('baby-monitorings')
export class BabyMonitoringsController {
  constructor(
    private readonly babyMonitoringsService: BabyMonitoringsService,
  ) {}

  @Auth('USER', 'ADMIN')
  @Get('child/:childId')
  async findOne(
    @Param('childId') childId: string,
  ): Promise<BabyMonitoring | null> {
    return this.babyMonitoringsService.findOneByChildId(childId);
  }

  @Auth('USER', 'ADMIN')
  @Patch(':childId')
  async update(
    @Param('childId') childId: string,
    @Body() data: Partial<BabyMonitoring>,
  ): Promise<BabyMonitoring> {
    return this.babyMonitoringsService.update(childId, data);
  }
}
