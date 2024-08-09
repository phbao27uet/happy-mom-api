import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const ForgotPasswordSchema = z.object({
  username: z.string().trim().min(6, {
    message: 'Mật khẩu ít nhất 6 ký tự',
  }),
});

export class ForgotPasswordDto extends createZodDto(ForgotPasswordSchema) {}
