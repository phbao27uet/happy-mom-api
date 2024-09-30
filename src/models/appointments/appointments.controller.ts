import { Controller, Get, Param, Patch } from '@nestjs/common';
import { Auth } from '@shared/decorators';
import { Appointment } from '@prisma/client';
import { AppointmentsService } from './appointments.service';

@Controller('appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Auth('USER', 'ADMIN')
  @Get('child/:childId')
  async findAllByChild(
    @Param('childId') childId: string,
  ): Promise<Appointment[]> {
    return this.appointmentsService.findAllByChild(childId);
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
