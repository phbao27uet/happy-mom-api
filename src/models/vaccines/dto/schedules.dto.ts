import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const schedulesSchema = z.object({
  status: z.enum(['INJECTED', 'NOT_INJECTED', 'ALL']).default('ALL'),
});

export class SchedulesDto extends createZodDto(schedulesSchema) {}
