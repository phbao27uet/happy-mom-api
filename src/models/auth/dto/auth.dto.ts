import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const CredentialsSchema = z.object({
  username: z.string().min(1, {
    message: 'Tên đăng nhập không được để trống',
  }),
  password: z
    .string({
      message: 'Mật khẩu không hợp lệ',
    })
    .trim()
    .min(6, {
      message: 'Mật khẩu ít nhất 6 ký tự',
    }),
});

export class CredentialsDto extends createZodDto(CredentialsSchema) {}
