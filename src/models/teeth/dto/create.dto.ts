import { dateSchema, textSchema, textSchemaMax1024 } from '@shared/schemas'
import { createZodDto } from 'nestjs-zod'
import { z } from 'nestjs-zod/z'

export const createToothGrowthSchema = z.object({
  childId: textSchema,
  growthDate: dateSchema,
  notes: textSchemaMax1024.optional(),
  images: z.array(textSchema).default([]),
  status: z.enum(['GROWN', 'NOT_GROWN']),
})

export class CreateToothGrowthDto extends createZodDto(
  createToothGrowthSchema,
) {}
