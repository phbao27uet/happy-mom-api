import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const createEventSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  startTime: z.date().refine((date) => date > new Date(), {
    message: 'Start time must be in the future',
  }),
  endTime: z.date().refine(
    (endTime) => {
      return (
        endTime > new Date() && endTime > createEventSchema.shape.startTime
      );
    },
    {
      message: 'End time must be after start time',
    },
  ),
  rules: z.string().optional(),
  thumbnail: z.string().url('Invalid thumbnail URL').optional(),
});

export class CreateEventDto extends createZodDto(createEventSchema) {}
