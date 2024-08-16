import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const createPostSchema = z
  .object({
    groupId: z.string().optional(),
    content: z.string().optional(),
    images: z.array(z.string()).optional(),
  })
  .superRefine((data, ctx) => {
    if (!data.content && !data.images) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Nội dung hoặc hình ảnh không được để trống',
      });
    }
  });

export class CreatePostDto extends createZodDto(createPostSchema) {}
