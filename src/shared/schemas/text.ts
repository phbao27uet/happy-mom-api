import { z } from "zod";
import { ERROR_MESSAGE } from "./messages";

export const textSchema = z
  .string({
    required_error: ERROR_MESSAGE.requiredError,
    invalid_type_error: ERROR_MESSAGE.requiredError,
  })
  .trim()
  .min(1, {
    message: ERROR_MESSAGE.requiredError,
  })
  .max(255, {
    message: ERROR_MESSAGE.maxCharacters,
  });

export const textSchemaMax1024 = textSchema.max(1024, {
  message: ERROR_MESSAGE.maxCharacters,
});
