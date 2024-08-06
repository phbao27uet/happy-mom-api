import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const DeleteManyPackageSchema = z.object({
  ids: z.array(z.string()),
});

export class DeleteManyPackageDto extends createZodDto(
  DeleteManyPackageSchema,
) {}
