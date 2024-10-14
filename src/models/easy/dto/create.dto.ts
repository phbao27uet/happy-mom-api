import { dateSchema, textSchema, textSchemaMax1024 } from '@shared/schemas'
import { numberSchema } from '@shared/schemas/number'
import { createZodDto } from 'nestjs-zod'
import { z } from 'nestjs-zod/z'

const easyActivityTypeSchema = z.enum([
  'EAT',
  'ACTIVITY',
  'SLEEP',
  'YOUR_TIME',
  'OTHER',
])

export const easyActivitySchema = z.object({
  type: easyActivityTypeSchema,
  startTime: dateSchema,
  endTime: dateSchema,
  note: textSchemaMax1024,
})

export const easyActivityGroupSchema = z.object({
  easyActivities: easyActivitySchema.array(),
})

export const createEasySchema = z.object({
  name: textSchema,
  startWeek: numberSchema,
  endWeek: numberSchema,
  note: textSchemaMax1024,
  type: z.enum(['PUBLIC', 'PRIVATE']),
  activityGroups: easyActivityGroupSchema.array(),
})

export class CreateEasyDto extends createZodDto(createEasySchema) {}
