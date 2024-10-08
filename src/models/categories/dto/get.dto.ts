import { DefaultFindAllQuerySchema } from '@models/base'
import { createZodDto } from 'nestjs-zod'
import { z } from 'nestjs-zod/z'

const getCategorySchema = DefaultFindAllQuerySchema.merge(
  z.object({
    type: z.enum(['ARTICLE', 'RECIPE']).default('ARTICLE'),
  }),
)

export class GetCategoryDto extends createZodDto(getCategorySchema) {}
