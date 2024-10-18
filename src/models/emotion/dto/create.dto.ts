import { dateSchema, textSchema } from '@shared/schemas'
import { createZodDto } from 'nestjs-zod'
import { z } from 'nestjs-zod/z'

export const createEmotionSchema = z.object({
  childId: textSchema,
  date: dateSchema,
  emotion: z.enum(['VERY_GOOD', 'GOOD', 'NORMAL', 'FUSSY', 'VERY_FUSSY']),
})

export class CreateEmotionDto extends createZodDto(createEmotionSchema) {}
