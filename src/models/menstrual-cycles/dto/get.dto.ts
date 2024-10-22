import { createZodDto } from 'nestjs-zod'
import { z } from 'nestjs-zod/z'

export const getMonthlyCycleSchema = z.object({
  monthYear: z.string().regex(/^\d{2}-\d{4}$/, 'Format phải là MM-YYYY'),
})

export class GetMonthlyCycleDto extends createZodDto(
  getMonthlyCycleSchema.strict(),
) {}
