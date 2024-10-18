import { textSchema } from '@shared/schemas'
import { createZodDto } from 'nestjs-zod'
import { z } from 'nestjs-zod/z'

const genderSchema = z.enum(['MALE', 'FEMALE'])
export const typeSchema = z.enum(['FIRST_CHARACTER', 'ELEMENTAL'])
export const elementalSchema = z.enum([
  'METAL',
  'WOOD',
  'WATER',
  'FIRE',
  'EARTH',
])

const getNamingForChildSchema = z
  .object({
    gender: genderSchema,
    type: typeSchema,
    elemental: elementalSchema.optional(),
    firstCharacter: z.string().optional(),
    lastName: textSchema,
  })
  .superRefine((data, ctx) => {
    if (data.type === 'FIRST_CHARACTER' && !data.firstCharacter) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Chữ cái đầu tiên là bắt buộc',
        path: ['firstCharacter'],
      })
    }

    if (data.type === 'ELEMENTAL' && !data.elemental) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Ngũ hành là bắt buộc',
        path: ['elemental'],
      })
    }
  })

export class GetNamingForChildDto extends createZodDto(
  getNamingForChildSchema,
) {}

export type ElementalType = z.input<typeof elementalSchema>
