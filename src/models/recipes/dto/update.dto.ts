import { createZodDto } from 'nestjs-zod'
import { createRecipeSchema } from './create.dto'

export const updateRecipeSchema = createRecipeSchema.partial()

export class UpdateRecipeDto extends createZodDto(updateRecipeSchema) {}
