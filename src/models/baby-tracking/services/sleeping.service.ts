import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '@shared/prisma';
import { differenceInMinutes, format } from 'date-fns';
import { chain, mapValues, sumBy } from 'lodash';
import { GroupedData } from '../interfaces';
import { TrackingCategory } from '../enums';

export type BabyTrackingWithSleeping = Prisma.BabyTrackingGetPayload<{
  include: { sleepEntry: true };
}>[];

export interface BabyTrackingWithSleepingRecord {
  [date: string]: BabyTrackingWithSleeping;
}

@Injectable()
export class SleepingService {
  constructor(private prisma: PrismaService) {}

  async formatData(data: BabyTrackingWithSleepingRecord) {
    const res = mapValues(data, (entry) => {
      const count = entry.length;

      const totalMinutes = sumBy(entry, (item) => {
        if (!item.sleepEntry) {
          return 0;
        }

        return differenceInMinutes(
          new Date(item.sleepEntry?.endTime),
          new Date(item.sleepEntry?.startTime),
        );
      });

      const dataSorted = entry.sort(
        (a, b) =>
          Number(b.sleepEntry?.startTime) - Number(a.sleepEntry?.startTime),
      );
      return {
        data: dataSorted,
        count,
        totalHours: totalMinutes / 60,
      };
    });
    return res;
  }

  async history(data: BabyTrackingWithSleeping): Promise<GroupedData> {
    const groupedData = this.groupDataByMonthAndDay(data);

    return groupedData;
  }

  groupDataByMonthAndDay(data: BabyTrackingWithSleeping): GroupedData {
    const res = chain(data)
      .groupBy((item) => format(new Date(item.date), 'yyyy-MM'))
      .mapValues((groupByMonth) => {
        const totals = {
          LOW: 0,
          SLIGHTLY_LOW: 0,
          NORMAL: 0,
          HIGH: 0,
        };

        const dataInMonth = chain(groupByMonth)
          .groupBy((item) => format(new Date(item.date), 'yyyy-MM-dd'))
          .mapValues((groupByDay) => {
            const totalMinutes = sumBy(groupByDay, (item) => {
              if (!item.sleepEntry) {
                return 0;
              }

              return differenceInMinutes(
                new Date(item.sleepEntry?.endTime),
                new Date(item.sleepEntry?.startTime),
              );
            });

            const totalHours = totalMinutes / 60;
            const status = this.categorizeHours(totalHours);

            totals[status] += 1;

            return {
              status,
            };
          })
          .value();

        return {
          data: dataInMonth,
          totals,
        };
      });

    return res.value();
  }

  categorizeHours(hours: number): TrackingCategory {
    if (hours < 8) {
      return TrackingCategory.LOW;
    } else if (hours >= 8 && hours < 10) {
      return TrackingCategory.SLIGHTLY_LOW;
    } else if (hours >= 10 && hours < 12) {
      return TrackingCategory.NORMAL;
    } else {
      return TrackingCategory.HIGH;
    }
  }
}
