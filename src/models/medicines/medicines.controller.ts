import { Controller, Get, Query } from '@nestjs/common';
import { MedicinesService } from './medicines.service';
import { Auth } from '@shared/decorators';
import { GetListMedicineDto } from './dto';

@Controller('medicines')
export class MedicinesController {
  constructor(private readonly medicinesService: MedicinesService) {}

  @Auth('USER')
  @Get('')
  async findAll(@Query() queryDto: GetListMedicineDto) {
    return this.medicinesService.findAll(queryDto);
  }

  @Auth('USER')
  @Get(':id')
  async findOne(@Query('id') id: string) {
    return this.medicinesService.findOne(id);
  }
}
