import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { DefaultFindAllQueryDto } from '@models/base';
import { CreateAlarmDto, UpdateAlarmDto } from './dto';
import { isNil } from 'lodash';

@Injectable()
export class AlarmsService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly _include: Prisma.AlarmInclude = {
    interval: true,
  };

  async findAllMine(
    currentId: string,
    defaultFindAllQuery: DefaultFindAllQueryDto,
  ) {
    const { perPage = 20, page = 1 } = defaultFindAllQuery;

    const where: Prisma.AlarmWhereInput = {
      accountId: currentId,
    };

    const [total, data] = await Promise.all([
      this.prisma.alarm.count({
        where,
      }),
      this.prisma.alarm.findMany({
        where,
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          ...this._include,
        },
        skip: page && perPage ? (page - 1) * perPage : undefined,
        take: page && perPage ? perPage : undefined,
      }),
    ]);

    return {
      data: data,
      meta: {
        currentPage: page,
        perPage,
        total: total ?? 0,
        totalPages: Math.ceil((total ?? 0) / perPage),
      },
    };
  }

  async findOne(id: string) {
    return this.prisma.alarm.findUnique({
      where: {
        id,
      },
      include: {
        ...this._include,
      },
    });
  }

  async create(currentId: string, createDto: CreateAlarmDto) {
    const { interval, isRepeat, ...rest } = createDto;

    const res = await this.prisma.alarm.create({
      data: {
        ...rest,
        account: {
          connect: {
            id: currentId,
          },
        },

        interval:
          interval && isRepeat
            ? {
                create: {
                  minutes: interval.minutes,
                },
              }
            : undefined,
      },
      include: {
        ...this._include,
      },
    });

    return res;
  }

  async remove(id: string) {
    return this.prisma.alarm.delete({
      where: {
        id,
      },
      include: {
        ...this._include,
      },
    });
  }

  /**
   *
   * @description Nếu không lặp lại thì xóa interval
   */
  async update(id: string, updateDto: UpdateAlarmDto) {
    const { isRepeat, interval, ...rest } = updateDto;

    const intervalData: Prisma.AlarmUpdateInput = (() => {
      if (isNil(isRepeat) || (isRepeat && isNil(interval?.minutes))) {
        return {};
      }

      if (!isRepeat) {
        return {
          interval: {
            delete: true,
          },
        };
      }

      if (isNil(interval?.minutes)) {
        return {};
      }

      return {
        interval: {
          upsert: {
            where: {
              alarmId: id,
            },
            update: {
              minutes: interval.minutes,
            },
            create: {
              minutes: interval.minutes,
            },
          },
        },
      };
    })();

    return this.prisma.alarm.update({
      where: {
        id,
      },
      data: {
        ...rest,
        ...intervalData,
      },
      include: {
        ...this._include,
      },
    });
  }

  async toggle(id: string) {
    const alarm = await this.prisma.alarm.findUnique({
      where: {
        id,
      },
    });

    if (!alarm) {
      throw new NotFoundException('Không tìm thấy báo thức');
    }

    return this.prisma.alarm.update({
      where: {
        id,
      },
      data: {
        isActive: !alarm.isActive,
      },
      include: {
        ...this._include,
      },
    });
  }
}
