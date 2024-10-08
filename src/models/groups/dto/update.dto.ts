import { createZodDto } from 'nestjs-zod'
import { createGroupSchema } from '.'

const updateGroupSchema = createGroupSchema.partial()

export class UpdateGroupDto extends createZodDto(updateGroupSchema) {}
