import { isInteger } from 'lodash'
import { z } from 'zod'
import { ERROR_MESSAGE } from './messages'

export const numberSchema = z
  .number({
    required_error: ERROR_MESSAGE.requiredError,
    invalid_type_error: ERROR_MESSAGE.requiredError,
  })
  .refine((val) => {
    return isInteger(val)
  }, ERROR_MESSAGE.integerNumber)
  .refine((val) => {
    return val.toString().length <= 7
  }, ERROR_MESSAGE.maxNumberInput)

export const decimalNumberSchema = z
  .number({
    required_error: ERROR_MESSAGE.requiredError,
    invalid_type_error: ERROR_MESSAGE.requiredError,
  })
  .refine((val) => {
    const [integer] = val.toString().split('.')

    return !Number.isNaN(val) && integer.toString().length <= 7
  }, ERROR_MESSAGE.maxNumberInput)
