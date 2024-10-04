import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { Event } from '@prisma/client';
import { CreateEventDto, UpdateEventDto } from './dto';
import { Auth } from '@shared/decorators';
import { DefaultFindAllQueryDto } from '@models/base';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Auth('USER', 'ADMIN')
  @Get('pagination')
  async findAllPagination(@Query() queryDto: DefaultFindAllQueryDto) {
    return this.eventsService.findAllPagination(queryDto);
  }

  @Get('')
  async findAll(): Promise<Event[]> {
    return this.eventsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Event | null> {
    return this.eventsService.findOne(id);
  }

  @Post('')
  async create(@Body() createEventDto: CreateEventDto): Promise<Event> {
    return this.eventsService.create(createEventDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEventDto: UpdateEventDto,
  ): Promise<Event> {
    return this.eventsService.update(id, updateEventDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Event> {
    return this.eventsService.remove(id);
  }
}
