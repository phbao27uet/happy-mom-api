import { textSchema } from '@shared/schemas'
import { createZodDto } from 'nestjs-zod'
import { z } from 'zod'

const getTeethSchema = z.object({
  childId: textSchema,
})

export class GetTeethDto extends createZodDto(getTeethSchema) {}
