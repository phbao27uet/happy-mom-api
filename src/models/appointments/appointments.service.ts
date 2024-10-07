import { Injectable } from '@nestjs/common';
import { Appointment, AppointmentStatus } from '@prisma/client';
import { PrismaService } from '@shared/prisma';

@Injectable()
export class AppointmentsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllByChild(
    childId: string,
    status?: AppointmentStatus,
  ): Promise<Appointment[]> {
    const statusFilter = status ? { status } : {};
    return this.prisma.appointment.findMany({
      where: {
        childId,
        ...statusFilter,
      },
    });
  }

  async findOne(id: string): Promise<Appointment | null> {
    return this.prisma.appointment.findUnique({ where: { id } });
  }

  async toggleStatus(id: string): Promise<Appointment> {
    const appointment = await this.prisma.appointment.findUnique({
      where: { id },
    });

    if (!appointment) {
      throw new Error(`Appointment with id ${id} not found`);
    }

    return this.prisma.appointment.update({
      where: { id },
      data: {
        status:
          appointment.status === AppointmentStatus.UNCHECKED
            ? AppointmentStatus.CHECKED
            : AppointmentStatus.UNCHECKED,
      },
    });
  }
}
