import { endOfDay, startOfDay } from 'date-fns';
import { z } from 'zod';

export const baseDateSchema = z
  .string({
    required_error: 'Không được để trống',
  })
  .min(1, {
    message: 'Không được để trống',
  })
  .superRefine((date, ctx) => {
    if (isNaN(Date.parse(date))) {
      ctx.addIssue({
        code: 'invalid_date',
        message: 'Ngày không hợp lệ',
      });
      return false;
    }
  });

export const dateSchema = baseDateSchema.transform((date) =>
  new Date(date).toISOString(),
);

const handleFormatStartDate = (date?: string | null) => {
  if (!date) return null;
  return startOfDay(date).toISOString();
};

const handleFormatEndDate = (date?: string | null) => {
  if (!date) return null;
  return endOfDay(date).toISOString();
};

export const startOfDateSchema = baseDateSchema.transform(
  handleFormatStartDate,
);

export const endOfDateSchema = baseDateSchema.transform(handleFormatEndDate);

export const optionalDateSchema = z
  .string({
    required_error: 'Không được để trống',
  })
  .optional()
  .nullable()
  .superRefine((date, ctx) => {
    if (date && isNaN(Date.parse(date))) {
      ctx.addIssue({
        code: 'invalid_date',
        message: 'Ngày không hợp lệ',
      });
      return false;
    }
  });

export const optionalStartDateSchema = optionalDateSchema.transform(
  handleFormatStartDate,
);

export const optionalEndDateSchema =
  optionalDateSchema.transform(handleFormatEndDate);

export const startOfDaySchema = dateSchema.transform((value) => {
  return startOfDay(value);
});
