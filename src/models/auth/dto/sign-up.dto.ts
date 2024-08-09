import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const SignUpSchema = z.object({
  username: z.string().min(1, {
    message: 'Tên đăng nhập không được để trống',
  }),
  password: z.string().trim().min(6, {
    message: 'Mật khẩu ít nhất 6 ký tự',
  }),
});

export class SignUpDto extends createZodDto(SignUpSchema) {}
