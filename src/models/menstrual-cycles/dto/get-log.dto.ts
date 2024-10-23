import { DefaultFindAllQuerySchema } from '@models/base'
import { createZodDto } from 'nestjs-zod'
import { getMonthlyCycleSchema } from './get-monthly.dto'

const getLogCycleSchema = DefaultFindAllQuerySchema.merge(getMonthlyCycleSchema)

export class GetLogCycleDto extends createZodDto(getLogCycleSchema.strict()) {}
