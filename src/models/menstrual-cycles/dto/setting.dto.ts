import { dateSchema } from '@shared/schemas'
import { createZodDto } from 'nestjs-zod'
import { z } from 'nestjs-zod/z'

export const createSettingSchema = z.object({
  startDate: dateSchema.describe('Ngày bắt đầu chu kỳ'),
  cycleDuration: z
    .number()
    .min(21)
    .max(100)
    .describe('Độ dài chu kỳ của bạn kéo dài bao lâu?'),
  periodDuration: z
    .number()
    .min(1)
    .max(12)
    .describe('Số ngày đèn đỏ của bạn kéo dài trong bao lâu?'),
})

export class SettingDto extends createZodDto(createSettingSchema.strict()) {}
