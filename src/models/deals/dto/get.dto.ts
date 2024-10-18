import { DefaultFindAllQuerySchema } from '@models/base'
import { createZodDto } from 'nestjs-zod'
import { z } from 'nestjs-zod/z'

const getDealSchema = DefaultFindAllQuerySchema.merge(
  z.object({
    type: z.enum(['ALL', 'FOOD', 'FASHION', 'TRAVEL', 'FINANCE']),
  }),
)

export class GetDealDto extends createZodDto(getDealSchema.strict()) {}
