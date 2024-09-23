import { DefaultFindAllQuerySchema } from '@models/base';
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';
import { babyTrackingTypeSchema } from '.';

const queryTypeSchema = z.enum(['DAY', 'MONTH', 'YEAR']);

const getBabyTrackingSchema = DefaultFindAllQuerySchema.merge(
  z.object({
    type: babyTrackingTypeSchema,
    queryType: queryTypeSchema,
  }),
);

export class GetBabyTrackingDto extends createZodDto(
  getBabyTrackingSchema.strict(),
) {}
