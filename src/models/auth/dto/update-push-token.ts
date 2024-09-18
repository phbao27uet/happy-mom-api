import Expo from 'expo-server-sdk';
import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const pushTokenSchema = z
  .object({
    token: z.string().trim(),
  })
  .superRefine((data, ctx) => {
    if (!Expo.isExpoPushToken(data.token)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Invalid Expo push token',
      });
    }
  });

export class PushTokenDto extends createZodDto(pushTokenSchema) {}
