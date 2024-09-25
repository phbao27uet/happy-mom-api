import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const createArticleSchema = z.object({
  thumbnail: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  content: z.string().min(1),
  images: z.array(z.string()).optional(),
  subCategoryId: z.string().min(1),
});

export class CreateArticleDto extends createZodDto(createArticleSchema) {}
