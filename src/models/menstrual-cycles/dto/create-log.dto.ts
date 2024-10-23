import {
  MenstrualCycleMood,
  MenstrualCycleSexualActivity,
  MenstrualCycleStatus,
} from '@prisma/client'
import { dateSchema, textSchemaInfinite } from '@shared/schemas'
import { createZodDto } from 'nestjs-zod'
import { z } from 'nestjs-zod/z'

const menstrualCycleSexualActivitySchema = z.nativeEnum(
  MenstrualCycleSexualActivity,
)
const menstrualCycleMoodSchema = z.nativeEnum(MenstrualCycleMood)
const menstrualCycleStatusSchema = z.nativeEnum(MenstrualCycleStatus)

export const createLogCycleSchema = z.object({
  date: dateSchema,
  relation: menstrualCycleSexualActivitySchema.array(),
  mood: menstrualCycleMoodSchema.array(),
  status: menstrualCycleStatusSchema.array(),
  note: textSchemaInfinite.optional(),
})

export class CreateLogCycleDto extends createZodDto(
  createLogCycleSchema.strict(),
) {}
