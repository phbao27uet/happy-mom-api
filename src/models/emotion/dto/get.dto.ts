import { textSchema } from '@shared/schemas'
import { createZodDto } from 'nestjs-zod'
import { z } from 'zod'

const getSchema = z.object({
  childId: textSchema,
})

export class GetEmotionDto extends createZodDto(getSchema) {}
