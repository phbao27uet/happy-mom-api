import { createZodDto } from 'nestjs-zod';
import { baseDiarySchema } from './create.dto';

const updateDiarySchema = baseDiarySchema.omit({ childId: true });

export class UpdateDiaryDto extends createZodDto(updateDiarySchema) {}
