import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '@shared/prisma';
import { chain, mapValues } from 'lodash';
import { TrackingCategory } from '../enums';
import { GroupedData } from '../interfaces';
import { format } from 'date-fns';

export type BabyTrackingWithDiaper = Prisma.BabyTrackingGetPayload<{
  include: { diaperEntry: true };
}>[];

export interface BabyTrackingWithDiaperRecord {
  [date: string]: BabyTrackingWithDiaper;
}

@Injectable()
export class DiaperService {
  constructor(private prisma: PrismaService) {}

  async formatData(data: BabyTrackingWithDiaperRecord) {
    const res = mapValues(data, (entry) => {
      const count = entry.length;

      const dataSorted = entry.sort(
        (a, b) => Number(b.diaperEntry?.time) - Number(a.diaperEntry?.time),
      );

      return {
        data: dataSorted,
        count,
        average: 24 / count,
      };
    });

    return res;
  }

  async history(data: BabyTrackingWithDiaper): Promise<GroupedData> {
    const groupedData = this.groupPumpingDataByMonthAndDay(data);

    return groupedData;
  }

  groupPumpingDataByMonthAndDay(data: BabyTrackingWithDiaper): GroupedData {
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
