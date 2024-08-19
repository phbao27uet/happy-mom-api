import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const handleRequestSchema = z.object({
  friendRequestId: z.string(),
  status: z.enum(['ACCEPTED', 'DECLINED']),
});

export class HandleRequestDto extends createZodDto(handleRequestSchema) {}
