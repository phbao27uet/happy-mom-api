import { DefaultFindAllQuerySchema } from '@models/base';
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';
import { babyTrackingTypeSchema } from '.';
import { dateSchema } from '@shared/schemas';

const queryTypeSchema = z.enum(['DAY', 'MONTH', 'YEAR']);

const getBabyTrackingSchema = DefaultFindAllQuerySchema.merge(
  z.object({
    type: babyTrackingTypeSchema,
    queryType: queryTypeSchema,
    childId: z.string(),
    startDate: dateSchema.optional(),
    endDate: dateSchema.optional(),
  }),
).superRefine((data, ctx) => {
  if (data.startDate && data.endDate && data.startDate > data.endDate) {
    return ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Thời gian bắt đầu không thể lớn hơn thời gian kết thúc',
    });
  }
});

export class GetBabyTrackingDto extends createZodDto(getBabyTrackingSchema) {}
