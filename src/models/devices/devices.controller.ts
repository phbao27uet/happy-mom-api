import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { DevicesService } from './devices.service';
import { Device } from '@prisma/client';
import { CreateDeviceDto, UpdateDeviceDto } from './dto';
import { Auth } from '@shared/decorators';

@Auth('USER', 'ADMIN')
@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @Get('')
  async findAllByAccount(
    @Query('accountId') accountId: string,
  ): Promise<Device[]> {
    return this.devicesService.findAllByAccount(accountId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Device | null> {
    return this.devicesService.findOne(id);
  }

  @Post('')
  async create(@Body() createDeviceDto: CreateDeviceDto): Promise<Device> {
    return this.devicesService.create(createDeviceDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDeviceDto: UpdateDeviceDto,
  ): Promise<Device> {
    return this.devicesService.update(id, updateDeviceDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Device> {
    return this.devicesService.remove(id);
  }
}
