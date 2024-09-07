import { DefaultFindAllQuerySchema } from '@models/base';
import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const getListFoodSchema = DefaultFindAllQuerySchema.merge(
  z.object({
    foodCategoryId: z.string().optional(),
  }),
);

export class GetListFoodDto extends createZodDto(getListFoodSchema.strict()) {}
