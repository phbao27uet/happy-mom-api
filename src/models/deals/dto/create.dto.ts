import { dateSchema, textSchema, textSchemaInfinite } from '@shared/schemas'
import { createZodDto } from 'nestjs-zod'
import { z } from 'nestjs-zod/z'

export const createDealSchema = z.object({
  name: textSchema,
  description: textSchemaInfinite,
  imageUrl: textSchema,
  expiredAt: dateSchema,
  type: z.enum(['FOOD', 'FASHION', 'TRAVEL', 'FINANCE']),
})

export class CreateDealDto extends createZodDto(createDealSchema) {}
