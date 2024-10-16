import { dateSchema, textSchema } from '@shared/schemas'
import { createZodDto } from 'nestjs-zod'
import { z } from 'zod'

const getListEmotionSchema = z
  .object({
    childId: textSchema,
    startDate: dateSchema,
    endDate: dateSchema,
  })
  .superRefine((data, ctx) => {
    if (data.startDate > data.endDate) {
      return ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Thời gian bắt đầu không thể lớn hơn thời gian kết thúc',
      })
    }
  })

export class GetListEmotionDto extends createZodDto(getListEmotionSchema) {}
