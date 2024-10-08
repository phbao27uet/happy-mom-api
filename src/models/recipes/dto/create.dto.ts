import { textSchema, textSchemaMax1024 } from '@shared/schemas'
import { numberSchema } from '@shared/schemas/number'
import { createZodDto } from 'nestjs-zod'
import { z } from 'nestjs-zod/z'

export const createRecipeSchema = z.object({
  title: textSchema,
  description: textSchemaMax1024,
  thumbnail: textSchema,
  cookingTime: numberSchema,
  ingredients: z.array(z.lazy(() => ingredientSchema)),
  steps: z.array(z.lazy(() => stepSchema)),
  subCategoryIds: z.array(textSchema),
})

const ingredientSchema = z.object({
  name: textSchema,
  image: textSchema,
})

const stepSchema = z.object({
  description: textSchema,
})

export class CreateRecipeDto extends createZodDto(createRecipeSchema) {}
