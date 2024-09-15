import { Body, Controller, Get, Param, Patch, Query } from '@nestjs/common';
import { VaccinesService } from './vaccines.service';
import { Auth } from '@shared/decorators';
import { UpdateVaccineDto } from './dto/update.dto';
import { SchedulesDto } from './dto';

@Controller('vaccines')
export class VaccinesController {
  constructor(private readonly vaccinesService: VaccinesService) {}

  @Auth('USER')
  @Get(':childId/list')
  async findAllByChildId(@Param('childId') childId: string) {
    return this.vaccinesService.findAllByChildId(childId);
  }

  @Auth('USER')
  @Get(':childId/schedules')
  async schedules(
    @Param('childId') childId: string,
    @Query() query: SchedulesDto,
  ) {
    return this.vaccinesService.schedules(childId, query);
  }

  @Auth('USER')
  @Get(':childId/:vaccineDoesId')
  async findOne(
    @Param('childId') childId: string,
    @Param('vaccineDoesId') vaccineDoesId: string,
  ) {
    return this.vaccinesService.findOne(childId, vaccineDoesId);
  }

  @Auth('USER')
  @Patch(':childId/:vaccineDoesId')
  async update(
    @Param('childId') childId: string,
    @Param('vaccineDoesId') vaccineDoesId: string,
    @Body() updateDto: UpdateVaccineDto,
  ) {
    return this.vaccinesService.update(childId, vaccineDoesId, updateDto);
  }
}
