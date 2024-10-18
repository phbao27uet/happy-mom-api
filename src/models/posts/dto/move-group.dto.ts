import { textSchema } from '@shared/schemas'
import { createZodDto } from 'nestjs-zod'
import { z } from 'nestjs-zod/z'

const moveGroupPostSchema = z.object({
  groupId: textSchema,
})

export class MoveGroupPostDto extends createZodDto(moveGroupPostSchema) {}
