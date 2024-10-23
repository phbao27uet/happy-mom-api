import { createZodDto } from 'nestjs-zod'
import { createSettingSchema } from './setting.dto'

export const updateSettingSchema = createSettingSchema.partial()

export class UpdateSettingDto extends createZodDto(
  updateSettingSchema.strict(),
) {}
