import { Controller, Get, Param, Query } from '@nestjs/common';
import { EarlyEducationsService } from './early-educations.service';
import { Auth } from '@shared/decorators';
import { DefaultFindAllQueryDto } from '@models/base';

@Controller('early-educations')
export class EarlyEducationsController {
  constructor(
    private readonly earlyEducationsService: EarlyEducationsService,
  ) {}

  @Auth('USER')
  @Get('')
  async findAll(@Query() queryDto: DefaultFindAllQueryDto) {
    return this.earlyEducationsService.findAll(queryDto);
  }

  @Auth('USER')
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.earlyEducationsService.findOne(id);
  }
}
