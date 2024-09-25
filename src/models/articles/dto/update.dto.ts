import { createZodDto } from 'nestjs-zod';
import { createArticleSchema } from './create.dto';

export const updateArticleSchema = createArticleSchema.partial();

export class UpdateArticleDto extends createZodDto(updateArticleSchema) {}
