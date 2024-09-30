import { Controller, Get, Param } from '@nestjs/common';
import { Auth } from '@shared/decorators';
import { PregnancyWeekDetail } from '@prisma/client';
import { PregnancyWeekDetailsService } from './pregnancy-week-details.service';

@Controller('pregnancy-week-details')
export class PregnancyWeekDetailsController {
  constructor(
    private readonly pregnancyWeekDetailsService: PregnancyWeekDetailsService,
  ) {}

  @Auth('USER', 'ADMIN')
  @Get('child/:childId')
  async findAllByChild(
    @Param('childId') childId: string,
  ): Promise<PregnancyWeekDetail[]> {
    return this.pregnancyWeekDetailsService.findAllByChild(childId);
  }

  @Auth('USER', 'ADMIN')
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PregnancyWeekDetail | null> {
    return this.pregnancyWeekDetailsService.findOne(id);
  }

  @Auth('USER', 'ADMIN')
  @Get('child/:childId/week/:weekNumber')
  async findOneByWeekOfChild(
    @Param('childId') childId: string,
    @Param('weekNumber') weekNumber: number,
  ): Promise<PregnancyWeekDetail | null> {
    return this.pregnancyWeekDetailsService.findOneByWeekOfChild(
      childId,
      Number(weekNumber),
    );
  }
}
