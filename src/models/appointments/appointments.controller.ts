import { Controller, Get, Param, Patch, Query } from '@nestjs/common';
import { Auth } from '@shared/decorators';
import { Appointment, AppointmentStatus } from '@prisma/client';
import { AppointmentsService } from './appointments.service';

@Controller('appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Auth('USER', 'ADMIN')
  @Get('child/:childId')
  async findAllByChild(
    @Param('childId') childId: string,
    @Query('status') status?: string,
  ): Promise<Appointment[]> {
    const statusEnum = status as AppointmentStatus | undefined;
    return this.appointmentsService.findAllByChild(childId, statusEnum);
  }

  @Auth('USER', 'ADMIN')
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Appointment | null> {
    return this.appointmentsService.findOne(id);
  }

  @Auth('USER', 'ADMIN')
  @Patch(':id/toggle-status')
  async toggleStatus(@Param('id') id: string): Promise<Appointment> {
    return this.appointmentsService.toggleStatus(id);
  }
}
