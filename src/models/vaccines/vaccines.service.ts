import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, VaccineInjectionStatus } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { UpdateVaccineDto } from './dto/update.dto';
import { SchedulesDto } from './dto';

@Injectable()
export class VaccinesService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly _include: Prisma.AlarmInclude = {
    interval: true,
  };

  async findAllByChildId(childId: string) {
    const vaccines = await this.findAllVaccines(childId);

    const res = vaccines.map((vaccine) => {
      const vaccineDoeses = vaccine.vaccineDoeses.map((vaccineDoes) => {
        const { vaccineInjections, ...rest } = vaccineDoes;

        const status =
          vaccineInjections.length === 0
            ? VaccineInjectionStatus.NOT_INJECTED
            : vaccineInjections[0].status;

        return {
          ...rest,
          status,
        };
      });

      return {
        ...vaccine,
        vaccineDoeses,
      };
    });

    return res;
  }

  async findOne(childId: string, vaccineDoesId: string) {
    const vaccineDoes = await this.prisma.vaccineDoes.findUnique({
      where: {
        id: vaccineDoesId,
      },
      include: {
        vaccine: true,
        vaccineInjections: {
          where: {
            childId,
          },
        },
      },
    });

    if (!vaccineDoes) {
      throw new NotFoundException('Vắc xin không tồn tại');
    }

    const { vaccineInjections, ...rest } = vaccineDoes;

    const status =
      vaccineInjections.length === 0
        ? VaccineInjectionStatus.NOT_INJECTED
        : vaccineInjections[0].status;

    return {
      ...rest,
      status,
    };
  }

  async schedules(childId: string, query: SchedulesDto) {
    const schedules = await this.prisma.vaccineDoes.findMany({
      where: {},
      orderBy: {
        priority: 'asc',
      },
      include: {
        vaccineInjections: {
          where: {
            childId,
          },
        },
      },
    });

    const res = schedules.map((schedule) => {
      const { vaccineInjections, ...rest } = schedule;

      const status =
        vaccineInjections.length === 0
          ? VaccineInjectionStatus.NOT_INJECTED
          : vaccineInjections[0].status;

      return {
        ...rest,
        status,
      };
    });

    return res.filter((schedule) => {
      if (query.status === 'ALL') {
        return true;
      }

      return schedule.status === query.status;
    });
  }

  async findAllVaccines(childId?: string) {
    return this.prisma.vaccine.findMany({
      include: {
        vaccineDoeses: {
          orderBy: {
            priority: 'asc',
          },
          include: {
            vaccineInjections: {
              where: {
                childId,
              },
            },
          },
        },
      },
    });
  }

  async update(
    childId: string,
    vaccineDoesId: string,
    updateDto: UpdateVaccineDto,
  ) {
    const vaccineInjection = await this.prisma.vaccineInjection.upsert({
      where: {
        vaccineDoesId_childId: {
          childId,
          vaccineDoesId,
        },
      },
      update: {
        status: updateDto.status,
        injectionAt: updateDto.status === 'INJECTED' ? new Date() : undefined,
      },
      create: {
        status: updateDto.status,
        childId,
        vaccineDoesId,
        injectionAt: updateDto.status === 'INJECTED' ? new Date() : undefined,
      },
    });

    return vaccineInjection;
  }
}
