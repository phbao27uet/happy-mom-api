import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const updateVaccineSchema = z.object({
  status: z.enum(['INJECTED', 'NOT_INJECTED', 'SKIP']),
});

export class UpdateVaccineDto extends createZodDto(updateVaccineSchema) {}
