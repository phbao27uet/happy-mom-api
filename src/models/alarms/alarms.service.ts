import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { $Enums, Prisma } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { DefaultFindAllQueryDto } from '@models/base';
import { CreateAlarmDto, UpdateAlarmDto } from './dto';
import { isNil } from 'lodash';
import { SchedulerRegistry } from '@nestjs/schedule';
import { NotificationService } from '@shared/notifications/notifications.service';
import { CronJob } from 'cron';

@Injectable()
export class AlarmsService implements OnModuleInit {
  constructor(
    private readonly prisma: PrismaService,
    private readonly schedulerRegistry: SchedulerRegistry,
    private readonly notificationService: NotificationService,
  ) {}

  async onModuleInit() {
    await this.initializeAlarms();
  }

  private readonly _include: Prisma.AlarmInclude = {
    interval: true,
  };

  async initializeAlarms() {
    const alarms = await this.prisma.alarm.findMany({
      where: { isActive: true },
      include: { interval: true, account: true },
    });

    for (const alarm of alarms) {
      await this.scheduleAlarm(alarm);
    }
  }

  async scheduleAlarm(alarm: any) {
    const jobName = `alarm_${alarm.id}`;

    if (this.schedulerRegistry.doesExist('cron', jobName)) {
      this.schedulerRegistry.deleteCronJob(jobName);
    }

    let job: CronJob;
    const now = new Date();
    const alarmTime = new Date(alarm.time);

    switch (alarm.type) {
      case 'TIME':
        if (alarm.interval && alarm.interval.minutes) {
          // Xử lý cho alarm lặp lại theo khoảng thời gian
          const cronPattern = `*/${alarm.interval.minutes} * * * *`;
          job = new CronJob(cronPattern, () =>
            this.sendAlarmNotification(alarm),
          );

          // Nếu thời gian alarm đã qua, gửi thông báo ngay lập tức
          if (alarmTime < now) {
            this.sendAlarmNotification(alarm);
          }
        } else {
          // Xử lý cho alarm một lần
          if (alarmTime > now) {
            job = new CronJob(alarmTime, () => {
              this.sendAlarmNotification(alarm);
              this.schedulerRegistry.deleteCronJob(jobName);
            });
          } else {
            console.log(
              `Alarm ${alarm.id} đã quá hạn và sẽ không được kích hoạt.`,
            );
            return; // Không lên lịch cho alarm đã quá hạn
          }
        }
        break;
      case 'HOUR_INTERVAL':
        // Tính toán thời gian bắt đầu tiếp theo
        const nextHourTime = new Date(alarmTime);
        while (nextHourTime <= now) {
          nextHourTime.setHours(nextHourTime.getHours() + 1);
        }

        job = new CronJob(
          nextHourTime,
          () => {
            this.sendAlarmNotification(alarm);
          },
          null,
          false,
          'UTC',
          null,
          true,
        ); // Thêm 'true' để job tự động chạy lại
        break;
      case 'DAY_INTERVAL':
        // Tính toán thời gian bắt đầu tiếp theo
        const nextDayTime = new Date(alarmTime);
        while (nextDayTime <= now) {
          nextDayTime.setDate(nextDayTime.getDate() + 1);
        }

        job = new CronJob(
          nextDayTime,
          () => {
            this.sendAlarmNotification(alarm);
          },
          null,
          false,
          'UTC',
          null,
          true,
        ); // Thêm 'true' để job tự động chạy lại
        break;
      default:
        throw new Error('Loại alarm không hợp lệ');
    }

    if (job) {
      this.schedulerRegistry.addCronJob(jobName, job);
      job.start();
      console.log(`Đã lên lịch cho alarm: ${jobName} loại: ${alarm.type}`);
    }
  }

  async sendAlarmNotification(alarm: any) {
    const account = await this.prisma.account.findUnique({
      where: { id: alarm.accountId },
    });

    console.log(
      `Gửi thông báo cho hoạt động: ${alarm.activity} cho tài khoản: ${account?.id}`,
    );

    // if (!account || !account.pushToken) {
    //   console.error(
    //     `Không có token push hợp lệ cho tài khoản: ${alarm.accountId}`,
    //   );
    //   return;
    // }

    // const message = `Thông báo cho hoạt động: ${alarm.activity}`;
    // await this.notificationService.sendPushNotification(
    //   [account.pinCode],
    //   message,
    //   { alarmId: alarm.id },
    // );
  }

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
