import { DefaultFindAllQuerySchema } from '@models/base';
import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const getListDiarySchema = DefaultFindAllQuerySchema.merge(
  z.object({
    childId: z.string().optional(),
  }),
);

export class GetListDiaryDto extends createZodDto(getListDiarySchema) {}
