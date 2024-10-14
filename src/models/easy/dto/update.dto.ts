import { createZodDto } from 'nestjs-zod'
import { createEasySchema } from '.'

const updateEasySchema = createEasySchema.partial()

export class UpdateGroupDto extends createZodDto(updateEasySchema) {}
