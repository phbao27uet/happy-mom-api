import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const updateDeviceSchema = z.object({
  deviceName: z.string().optional(),
  deviceType: z.string().optional(),
  deviceId: z.string().optional(),
  accessToken: z.string().optional(),
});

// Định nghĩa DTO cho UpdateDevice
export class UpdateDeviceDto extends createZodDto(updateDeviceSchema) {}
