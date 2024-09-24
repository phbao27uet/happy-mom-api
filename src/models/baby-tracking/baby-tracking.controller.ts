import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { BabyTrackingService } from './services/baby-tracking.service';
import { CreateEntryDto, GetBabyTrackingDto, GetHistoryDto } from './dto';

@Controller('baby-tracking')
export class BabyTrackingController {
  constructor(private readonly babyTrackingService: BabyTrackingService) {}

  @Post()
  create(@Body() createEntryDto: CreateEntryDto) {
    return this.babyTrackingService.create(createEntryDto);
  }

  @Get()
  findAll(@Query() queryDto: GetBabyTrackingDto) {
    return this.babyTrackingService.findAll(queryDto);
  }

  @Get('history')
  findHistory(@Query() queryDto: GetHistoryDto) {
    return this.babyTrackingService.findHistory(queryDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.babyTrackingService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateEntryDto: UpdateEntryDto) {
  //   return this.babyTrackingService.update(id, updateEntryDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.babyTrackingService.remove(id);
  }
}
