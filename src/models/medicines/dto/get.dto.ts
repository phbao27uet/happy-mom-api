import { DefaultFindAllQuerySchema } from '@models/base';
import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const getListMedicineSchema = DefaultFindAllQuerySchema.merge(
  z.object({
    firstCharacter: z.string().optional(),
  }),
);

export class GetListMedicineDto extends createZodDto(getListMedicineSchema) {}
