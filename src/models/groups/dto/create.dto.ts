import { textSchema, textSchemaMax1024 } from '@shared/schemas';
import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const createGroupSchema = z.object({
  name: textSchema,
  background: textSchema,
  description: textSchemaMax1024,
});

export class CreateGroupDto extends createZodDto(createGroupSchema) {}
