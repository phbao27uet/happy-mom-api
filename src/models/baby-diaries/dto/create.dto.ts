import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const baseDiarySchema = z.object({
  content: z.string().optional(),
  images: z.array(z.string()).optional(),
  childId: z.string().trim().min(1),
});

const createDiarySchema = baseDiarySchema.superRefine((data, ctx) => {
  if (!data.content && !data.images) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Nội dung hoặc hình ảnh không được để trống',
    });
  }
});

export class CreateDiaryDto extends createZodDto(createDiarySchema) {}
