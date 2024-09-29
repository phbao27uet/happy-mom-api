import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '@shared/prisma';
import { chain, mapValues, sumBy } from 'lodash';
import { TrackingCategory } from '../enums';
import { GroupedData } from '../interfaces';
import { format } from 'date-fns';

export type BabyTrackingWithFeeding = Prisma.BabyTrackingGetPayload<{
  include: { feedingEntry: true };
}>[];

export interface BabyTrackingWithFeedingRecord {
  [date: string]: BabyTrackingWithFeeding;
}

@Injectable()
export class FeedingService {
  constructor(private prisma: PrismaService) {}

  async formatData(data: BabyTrackingWithFeedingRecord) {
    const res = mapValues(data, (entry) => {
      const count = entry.length;

      const total = entry.reduce(
        (acc, { feedingEntry }) => {
          if (!feedingEntry) {
            return acc;
          }

          return {
            totalAmount: acc.totalAmount + feedingEntry.amount,
            totalBreast:
              feedingEntry.milkType === 'BREAST_MILK'
                ? acc.totalBreast + Number(feedingEntry.amount)
                : acc.totalBreast,
          };
        },
        {
          totalAmount: 0,
          totalBreast: 0,
        },
      );

      const dataSorted = entry.sort(
        (a, b) =>
          Number(b.feedingEntry?.startTime) - Number(a.feedingEntry?.startTime),
      );

      return {
        data: dataSorted,
        count,
        ...total,
        totalFormula: total.totalAmount - total.totalBreast,
        average: total.totalAmount / count,
      };
    });

    return res;
  }

  async history(data: BabyTrackingWithFeeding): Promise<GroupedData> {
    const groupedData = this.groupPumpingDataByMonthAndDay(data);

    return groupedData;
  }

  groupPumpingDataByMonthAndDay(data: BabyTrackingWithFeeding): GroupedData {
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
            const totalAmount = sumBy(
              groupByDay,
              (item) => item.feedingEntry?.amount || 0,
            );

            const status = this.categorizeMilkAmount(totalAmount);

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

  categorizeMilkAmount(amount: number): TrackingCategory {
    if (amount < 50) {
      return TrackingCategory.LOW;
    } else if (amount >= 50 && amount < 150) {
      return TrackingCategory.SLIGHTLY_LOW;
    } else if (amount >= 150 && amount < 250) {
      return TrackingCategory.NORMAL;
    } else {
      return TrackingCategory.HIGH;
    }
  }
}
