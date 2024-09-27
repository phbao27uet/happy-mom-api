import { TrackingCategory } from '../enums';

export interface GroupedData {
  [month: string]: {
    data: {
      [day: string]: {
        status: TrackingCategory;
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
