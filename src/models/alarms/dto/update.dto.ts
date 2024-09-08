import { createZodDto } from 'nestjs-zod';
import { baseAlarmSchema } from './create.dto';
import { z } from 'nestjs-zod/z';

const updateAlarmSchema = baseAlarmSchema
  .omit({ type: true })
  .partial({
    activity: true,
    time: true,
  })
  .superRefine((data, ctx) => {
    if (data.isRepeat && !data.interval?.minutes) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Thời gian lặp không được để trống',
        path: ['interval.minutes'],
      });
    }
  });

export class UpdateAlarmDto extends createZodDto(updateAlarmSchema) {}
