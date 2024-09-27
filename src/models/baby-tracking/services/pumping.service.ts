import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '@shared/prisma';
import { format } from 'date-fns';
import { chain, mapValues, sumBy } from 'lodash';

export type BabyTrackingWithPumping = Prisma.BabyTrackingGetPayload<{
  include: { pumpingEntry: true };
}>[];

export interface BabyTrackingWithPumpingRecord {
  [date: string]: BabyTrackingWithPumping;
}

export enum MilkAmountCategory {
  LOW = 'LOW',
  SLIGHTLY_LOW = 'SLIGHTLY_LOW',
  NORMAL = 'NORMAL',
  HIGH = 'HIGH',
}

export interface GroupedPumpingData {
  [month: string]: {
    data: {
      [day: string]: {
        status: MilkAmountCategory;
      };
    };
    totals: {
      LOW: number;
      SLIGHTLY_LOW: number;
      NORMAL: number;
      HIGH: number;
    };
  };
}

@Injectable()
export class PumpingService {
  constructor(private prisma: PrismaService) {}

  async formatData(data: BabyTrackingWithPumpingRecord) {
    const res = mapValues(data, (entry) => {
      const count = entry.length;

      const total = entry.reduce(
        (acc, { pumpingEntry }) => {
          if (!pumpingEntry) {
            return acc;
          }

          return {
            totalBreast: acc.totalBreast + pumpingEntry.totalAmount,
            leftBreastAmount:
              acc.leftBreastAmount + Number(pumpingEntry.leftBreastAmount),
            rightBreastAmount:
              acc.rightBreastAmount + Number(pumpingEntry.rightBreastAmount),
          };
        },
        {
          totalBreast: 0,
          leftBreastAmount: 0,
          rightBreastAmount: 0,
        },
      );

      const dataSorted = entry.sort(
        (a, b) => Number(b.pumpingEntry?.time) - Number(a.pumpingEntry?.time),
      );

      return {
        data: dataSorted,
        count,
        ...total,
        undefined:
          total.totalBreast - total.leftBreastAmount - total.rightBreastAmount,
        average: total.totalBreast / count,
      };
    });

    return res;
  }

  async history(data: BabyTrackingWithPumping): Promise<GroupedPumpingData> {
    const groupedData = this.groupPumpingDataByMonthAndDay(data);

    return groupedData;
  }

  groupPumpingDataByMonthAndDay(
    data: BabyTrackingWithPumping,
  ): GroupedPumpingData {
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
              (item) => item.pumpingEntry?.totalAmount || 0,
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

  categorizeMilkAmount(amount: number): MilkAmountCategory {
    if (amount < 50) {
      return MilkAmountCategory.LOW;
    } else if (amount >= 50 && amount < 150) {
      return MilkAmountCategory.SLIGHTLY_LOW;
    } else if (amount >= 150 && amount < 250) {
      return MilkAmountCategory.NORMAL;
    } else {
      return MilkAmountCategory.HIGH;
    }
  }
}
