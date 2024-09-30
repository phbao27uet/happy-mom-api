import { Injectable } from '@nestjs/common';
import { Appointment } from '@prisma/client';
import { PrismaService } from '@shared/prisma';

@Injectable()
export class AppointmentsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllByChild(childId: string): Promise<Appointment[]> {
    return this.prisma.appointment.findMany({ where: { childId } });
  }

  async findOne(id: string): Promise<Appointment | null> {
    return this.prisma.appointment.findUnique({ where: { id } });
  }

  async toggleStatus(id: string): Promise<Appointment> {
    const appointment = await this.prisma.appointment.findUnique({
      where: { id },
    });

    return this.prisma.appointment.update({
      where: { id },
      data: {
        status: !appointment?.status,
      },
    });
  }
}
