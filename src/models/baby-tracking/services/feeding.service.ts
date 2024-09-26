import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '@shared/prisma';

export type BabyTrackingWithFeeding = Prisma.BabyTrackingGetPayload<{
  include: { feedingEntry: true };
}>[];

export interface BabyTrackingWithFeedingRecord {
  [date: string]: BabyTrackingWithFeeding;
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
      low: number;
      slightlyLow: number;
      normal: number;
      high: number;
    };
  };
}

@Injectable()
export class FeedingService {
  constructor(private prisma: PrismaService) {}

  //   async formatData(data: BabyTrackingWithFeedingRecord) {
  //     // const res = mapValues(data, (entry) => {
  //     //   const count = entry.length;
  //     //   const total = entry.reduce(
  //     //     (acc, { feedingEntry }) => {
  //     //       if (!feedingEntry) {
  //     //         return acc;
  //     //       }
  //     //       return {
  //     //         totalBreast: acc.totalBreast + pumpingEntry.totalAmount,
  //     //         leftBreastAmount:
  //     //           acc.leftBreastAmount + Number(pumpingEntry.leftBreastAmount),
  //     //         rightBreastAmount:
  //     //           acc.rightBreastAmount + Number(pumpingEntry.rightBreastAmount),
  //     //       };
  //     //     },
  //     //     {
  //     //       totalBreast: 0,
  //     //       leftBreastAmount: 0,
  //     //       rightBreastAmount: 0,
  //     //     },
  //     //   );
  //     //   const dataSorted = entry.sort(
  //     //     (a, b) => Number(b.pumpingEntry?.time) - Number(a.pumpingEntry?.time),
  //     //   );
  //     //   return {
  //     //     data: dataSorted,
  //     //     count,
  //     //     ...total,
  //     //     undefined:
  //     //       total.totalBreast - total.leftBreastAmount - total.rightBreastAmount,
  //     //     average: total.totalBreast / count,
  //     //   };
  //     // });
  //     // return res;
  //   }

  //   async history(data: BabyTrackingWithPumping): Promise<GroupedPumpingData> {
  //     const groupedData = this.groupPumpingDataByMonthAndDay(data);

  //     return groupedData;
  //   }

  //   groupPumpingDataByMonthAndDay(
  //     data: BabyTrackingWithPumping,
  //   ): GroupedPumpingData {
  //     return data.reduce((acc, curr) => {
  //       const month = format(new Date(curr.date), 'yyyy-MM');
  //       const day = format(new Date(curr.date), 'yyyy-MM-dd');

  //       if (!curr.pumpingEntry) {
  //         return acc;
  //       }

  //       const category = this.categorizeMilkAmount(curr.pumpingEntry.totalAmount);

  //       if (!acc[month]) {
  //         acc[month] = {
  //           data: {},
  //           totals: {
  //             low: 0,
  //             slightlyLow: 0,
  //             normal: 0,
  //             high: 0,
  //           },
  //         };
  //       }

  //       // Gán trạng thái lượng sữa cho từng ngày
  //       if (!acc[month].data[day]) {
  //         acc[month].data[day] = { status: category };
  //       }

  //       // Cập nhật tổng số cho từng loại trạng thái
  //       switch (category) {
  //         case MilkAmountCategory.LOW:
  //           acc[month].totals.low++;
  //           break;
  //         case MilkAmountCategory.SLIGHTLY_LOW:
  //           acc[month].totals.slightlyLow++;
  //           break;
  //         case MilkAmountCategory.NORMAL:
  //           acc[month].totals.normal++;
  //           break;
  //         case MilkAmountCategory.HIGH:
  //           acc[month].totals.high++;
  //           break;
  //       }

  //       return acc;
  //     }, {} as GroupedPumpingData);
  //   }
}
