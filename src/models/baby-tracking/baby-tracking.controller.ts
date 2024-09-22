import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { BabyTrackingService } from './services/baby-tracking.service';
import { CreateEntryDto, UpdateEntryDto } from './dto';
import { EntryType } from '@prisma/client';

@Controller('baby-tracking')
export class BabyTrackingController {
  constructor(private readonly babyTrackingService: BabyTrackingService) {}

  @Post()
  create(@Body() createEntryDto: CreateEntryDto) {
    return this.babyTrackingService.create(createEntryDto);
  }

  @Get()
  findAll(@Query('type') type?: EntryType) {
    return this.babyTrackingService.findAll(type);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.babyTrackingService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateEntryDto: UpdateEntryDto) {
    return this.babyTrackingService.update(id, updateEntryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.babyTrackingService.remove(id);
  }
}
