import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '@shared/prisma';
import { chain, mapValues } from 'lodash';
import { TrackingCategory } from '../enums';
import { GroupedData } from '../interfaces';
import { differenceInMinutes, format } from 'date-fns';

export type BabyTrackingWithSolidFood = Prisma.BabyTrackingGetPayload<{
  include: { solidFoodEntry: true };
}>[];

export interface BabyTrackingWithSolidFoodRecord {
  [date: string]: BabyTrackingWithSolidFood;
}

@Injectable()
export class SolidFoodService {
  constructor(private prisma: PrismaService) {}

  async formatData(data: BabyTrackingWithSolidFoodRecord) {
    const res = mapValues(data, (entry) => {
      const count = entry.length;

      const entryAddOnDiffMinutes = entry.map((item) => {
        const diffInMinutes = item.solidFoodEntry
          ? differenceInMinutes(
              new Date(item.solidFoodEntry?.endTime),
              new Date(item.solidFoodEntry?.startTime),
            )
          : 0;

        return {
          ...item,
          solidFoodEntry: {
            ...item.solidFoodEntry,
            diffInMinutes,
          },
        };
      });

      const total = entryAddOnDiffMinutes.reduce(
        (acc, { solidFoodEntry }) => {
          if (!solidFoodEntry) {
            return acc;
          }

          switch (solidFoodEntry.unit) {
            case 'ML':
              return {
                ...acc,
                totalMl: acc.totalMl + (solidFoodEntry.foodAmount || 0),
                totalMinutes: acc.totalMinutes + solidFoodEntry.diffInMinutes,
              };
            case 'GRAM':
              return {
                ...acc,
                totalGrams: acc.totalGrams + (solidFoodEntry.foodAmount || 0),
                totalMinutes: acc.totalMinutes + solidFoodEntry.diffInMinutes,
              };
            case 'BOWL':
              return {
                ...acc,
                totalBowls: acc.totalBowls + (solidFoodEntry.foodAmount || 0),
                totalMinutes: acc.totalMinutes + solidFoodEntry.diffInMinutes,
              };
            default:
              return acc;
          }
        },
        {
          totalMl: 0,
          totalGrams: 0,
          totalBowls: 0,
          totalMinutes: 0,
        },
      );

      const dataSorted = entryAddOnDiffMinutes.sort(
        (a, b) =>
          Number(b.solidFoodEntry?.startTime) -
          Number(a.solidFoodEntry?.startTime),
      );

      return {
        data: dataSorted,
        count,
        ...total,
        totalHours: total.totalMinutes / 60,
      };
    });
    return res;
  }

  async history(data: BabyTrackingWithSolidFood): Promise<GroupedData> {
    const groupedData = this.groupPumpingDataByMonthAndDay(data);

    return groupedData;
  }

  groupPumpingDataByMonthAndDay(data: BabyTrackingWithSolidFood): GroupedData {
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
            const count = groupByDay.length;
            const status = this.categorize(count);
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

  categorize(amount: number): TrackingCategory {
    if (amount < 1) {
      return TrackingCategory.LOW;
    } else if (amount >= 2 && amount < 3) {
      return TrackingCategory.SLIGHTLY_LOW;
    } else if (amount >= 3 && amount < 4) {
      return TrackingCategory.NORMAL;
    } else {
      return TrackingCategory.HIGH;
    }
  }
}
