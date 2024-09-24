import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';
import { babyTrackingTypeSchema } from '.';

const getHistorySchema = z.object({
  type: babyTrackingTypeSchema,
  childId: z.string(),
  year: z.string(),
});

export class GetHistoryDto extends createZodDto(getHistorySchema) {}
