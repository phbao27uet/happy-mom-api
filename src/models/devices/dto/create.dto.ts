import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const createDeviceSchema = z.object({
  deviceName: z.string().min(1),
  deviceType: z.string().min(1),
  deviceId: z.string().min(1),
  accessToken: z.string().min(1),
  accountId: z.string().min(1),
});

export class CreateDeviceDto extends createZodDto(createDeviceSchema) {}
