import { dateSchema } from '@shared/schemas';
import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const AlarmTypeSchema = z.enum([
  'TIME',
  'HOUR_INTERVAL',
  'DAY_INTERVAL',
]);

export const ActivitySchema = z.enum([
  'PUMPING', // Hút sữa
  'FEEDING', // Cho ăn
  'TEMPERATURE', // Đo nhiệt độ
  'DIAPER_CHANGE', // Thay bỉm
  'MEDICINE', // Uống thuốc
  'SLEEPING', // Đi ngủ
  'OTHER', // Khác
]);

const intervalSchema = z.object({
  minutes: z.number().min(0, { message: 'Thời gian phải lớn hơn 0' }),
});

export const baseAlarmSchema = z.object({
  type: AlarmTypeSchema,
  activity: ActivitySchema,
  time: dateSchema,
  interval: intervalSchema.optional(),
  isRepeat: z.boolean(),
  notes: z.string().max(200, 'Ghi chú không được quá 200 ký tự').optional(),
});

export const createAlarmSchema = baseAlarmSchema.superRefine((data, ctx) => {
  if (data.isRepeat && !data.interval?.minutes) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Thời gian lặp không được để trống',
      path: ['interval'],
    });
  }

  if (data.type === 'DAY_INTERVAL' || data.type === 'HOUR_INTERVAL') {
    if (data.interval?.minutes) {
      return ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Thời gian lặp không được nhập cần nhập cho kỳ ngày, giờ',
        path: ['interval.minutes'],
      });
    }
  }
});

export class CreateAlarmDto extends createZodDto(createAlarmSchema) {}
