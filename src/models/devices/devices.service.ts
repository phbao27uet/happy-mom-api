import { Injectable } from '@nestjs/common';
import { PrismaService } from '@shared/prisma';
import { Device } from '@prisma/client';
import { CreateDeviceDto, UpdateDeviceDto } from './dto';

@Injectable()
export class DevicesService {
  constructor(private prisma: PrismaService) { }

  async findAllByAccount(accountId: string): Promise<Device[]> {
    return this.prisma.device.findMany({
      where: {
        accountId,
      },
    });
  }

  async findOne(id: string): Promise<Device | null> {
    return this.prisma.device.findUnique({
      where: { id },
    });
  }

  async create(createDeviceDto: CreateDeviceDto): Promise<Device> {
    return this.prisma.device.create({
      data: createDeviceDto,
    });
  }

  async update(id: string, updateDeviceDto: UpdateDeviceDto): Promise<Device> {
    return this.prisma.device.update({
      where: { id },
      data: updateDeviceDto,
    });
  }

  async remove(id: string): Promise<Device> {
    return this.prisma.device.delete({
      where: { id },
    });
  }

  async createOrUpdateDevice(accountId: string, deviceData: CreateDeviceDto): Promise<Device> {
    return this.prisma.device.upsert({
      where: { accountId },
      update: {
        ...deviceData,
      },
      create: {
        ...deviceData,
        accountId,
      },
    });
  }
}
