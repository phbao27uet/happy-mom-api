import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const VerifyOTPSchema = z.object({
  code: z.string().trim().min(6, {
    message: 'Mật khẩu ít nhất 6 ký tự',
  }),
});

export class VerifyOTPDto extends createZodDto(VerifyOTPSchema) {}
