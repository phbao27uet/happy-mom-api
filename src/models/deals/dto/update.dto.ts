import { createZodDto } from 'nestjs-zod'
import { createDealSchema } from './create.dto'

export const updateDealSchema = createDealSchema.partial()

export class UpdateDealDto extends createZodDto(updateDealSchema) {}
