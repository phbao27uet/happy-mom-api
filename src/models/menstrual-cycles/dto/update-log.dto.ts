import { createZodDto } from 'nestjs-zod'
import { createLogCycleSchema } from './create-log.dto'

export const updateLogCycleSchema = createLogCycleSchema.partial()

export class UpdateLogCycleDto extends createZodDto(
  updateLogCycleSchema.strict(),
) {}
