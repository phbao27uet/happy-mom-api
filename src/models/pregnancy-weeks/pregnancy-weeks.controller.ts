import { Controller, Get, Param } from '@nestjs/common';
import { Auth } from '@shared/decorators';
import { PregnancyWeeksService } from './pregnancy-weeks.service';
import { PregnancyWeek } from '@prisma/client';

@Controller('pregnancy-weeks')
export class PregnancyWeeksController {
  constructor(private readonly pregnancyWeeksService: PregnancyWeeksService) {}

  @Auth('USER', 'ADMIN')
  @Get('child/:childId')
  async findAllByChild(
    @Param('childId') childId: string,
  ): Promise<PregnancyWeek[]> {
    return this.pregnancyWeeksService.findAllByChild(childId);
  }

  @Auth('USER', 'ADMIN')
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PregnancyWeek | null> {
    return this.pregnancyWeeksService.findOne(id);
  }

  @Auth('USER', 'ADMIN')
  @Get('child/:childId/week/:weekNumber')
  async findOneByWeekOfChild(
    @Param('childId') childId: string,
    @Param('weekNumber') weekNumber: number,
  ): Promise<PregnancyWeek | null> {
    return this.pregnancyWeeksService.findOneByWeekOfChild(
      childId,
      Number(weekNumber),
    );
  }
}
