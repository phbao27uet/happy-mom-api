import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { AlarmsService } from './alarms.service';
import { Auth, GetCurrentId } from '@shared/decorators';
import { DefaultFindAllQueryDto } from '@models/base';
import { CreateAlarmDto, UpdateAlarmDto } from './dto';

@Controller('alarms')
export class AlarmsController {
  constructor(private readonly alarmsService: AlarmsService) {}

  @Auth('USER')
  @Get('mine')
  async findAllMine(
    @GetCurrentId() currentId: string,
    @Query() queryDto: DefaultFindAllQueryDto,
  ) {
    return this.alarmsService.findAllMine(currentId, queryDto);
  }

  @Auth('USER', 'ADMIN')
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.alarmsService.findOne(id);
  }

  @Auth('USER')
  @Post('')
  async create(
    @GetCurrentId() currentId: string,
    @Body() createDto: CreateAlarmDto,
  ) {
    return this.alarmsService.create(currentId, createDto);
  }

  @Auth('USER')
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDto: UpdateAlarmDto) {
    return this.alarmsService.update(id, updateDto);
  }

  @Auth('USER')
  @Patch(':id/toggle')
  async toggle(@Param('id') id: string) {
    return this.alarmsService.toggle(id);
  }

  @Auth('USER')
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.alarmsService.remove(id);
  }
}
