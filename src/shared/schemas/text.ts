import { z } from 'zod'
import { ERROR_MESSAGE } from './messages'

export const textBaseSchema = z
  .string({
    required_error: ERROR_MESSAGE.requiredError,
    invalid_type_error: ERROR_MESSAGE.requiredError,
  })
  .trim()
  .min(1, {
    message: ERROR_MESSAGE.requiredError,
  })

export const textSchema = textBaseSchema.max(255, {
  message: ERROR_MESSAGE.maxCharacters,
})

export const textSchemaMax1024 = textBaseSchema.max(1024, {
  message: ERROR_MESSAGE.max1024Characters,
})

export const textSchemaInfinite = textBaseSchema.max(10000, {
  message: ERROR_MESSAGE.max10000Characters,
})
