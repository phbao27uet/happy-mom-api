import {
  dateSchema,
  numberSchema,
  textSchema,
  textSchemaInfinite,
} from '@shared/schemas'
import { createZodDto } from 'nestjs-zod'
import { z } from 'nestjs-zod/z'

const easyActivityTypeSchema = z.enum([
  'EAT',
  'ACTIVITY',
  'SLEEP',
  'YOUR_TIME',
  'OTHER',
])

export const easyActivitySchema = z
  .object({
    type: easyActivityTypeSchema.array(),
    startTime: dateSchema,
    endTime: dateSchema.optional(),
    note: textSchemaInfinite,
  })
  .strict()

export const easyActivityGroupSchema = z
  .object({
    name: textSchema,
    easyActivities: easyActivitySchema.array(),
  })
  .strict()

export const createEasySchema = z
  .object({
    name: textSchema,
    startWeek: numberSchema.optional(),
    endWeek: numberSchema.optional(),
    note: textSchemaInfinite.optional(),
    type: z.enum(['PUBLIC', 'PRIVATE']),
    easyActivityGroups: easyActivityGroupSchema.array().optional(),
  })
  .strict()

export class CreateEasyDto extends createZodDto(createEasySchema) {}
