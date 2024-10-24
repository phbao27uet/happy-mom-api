import { dateSchema } from '@shared/schemas';
import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

// Enums
export const babyTrackingTypeSchema = z.enum([
  'PUMPING',
  'FEEDING',
  'DIAPER',
  'SLEEP',
  'SOLID_FOOD',
]);
export type BabyTrackingType = z.infer<typeof babyTrackingTypeSchema>;

const FeedingMethod = z.enum(['BREAST', 'BOTTLE']);
const MilkType = z.enum(['BREAST_MILK', 'FORMULA']);
const DiaperReason = z.enum(['PEE', 'POO', 'BOTH', 'DRY_CHANGE']);

// Base schema
const BaseEntrySchema = z.object({
  date: dateSchema,
  note: z.string().optional(),
  imageUrls: z.array(z.string()).optional(),
  childId: z.string(),
});

// Specific entry schemas
const PumpingEntrySchema = BaseEntrySchema.extend({
  type: z.literal('PUMPING'),
  data: z.object({
    time: dateSchema,
    totalAmount: z.number().positive(),
    leftBreastAmount: z.number().positive().optional(),
    rightBreastAmount: z.number().positive().optional(),
  }),
});

const FeedingEntrySchema = BaseEntrySchema.extend({
  type: z.literal('FEEDING'),
  data: z.object({
    feedingMethod: FeedingMethod,
    startTime: dateSchema,
    endTime: dateSchema,
    milkType: MilkType,
    amount: z.number().positive(),
    duration: z.number().int().positive(),
  }),
});

const DiaperEntrySchema = BaseEntrySchema.extend({
  type: z.literal('DIAPER'),
  data: z.object({
    reason: DiaperReason,
    time: dateSchema,
  }),
});

const SleepEntrySchema = BaseEntrySchema.extend({
  type: z.literal('SLEEP'),
  data: z
    .object({
      startTime: dateSchema,
      endTime: dateSchema,
    })
    .superRefine((data, ctx) => {
      if (data.startTime > data.endTime) {
        return ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Thời gian bắt đầu không thể lớn hơn thời gian kết thúc',
        });
      }
    }),
});

const SolidFoodEntrySchema = BaseEntrySchema.extend({
  type: z.literal('SOLID_FOOD'),
  data: z
    .object({
      startTime: dateSchema,
      endTime: dateSchema,
      foodName: z.string(),
      preparation: z.enum(['PUREED', 'MASHED', 'SOFT', 'CHUNKY']),
      foodAmount: z.number().positive(),
      unit: z.enum(['BOWL', 'GRAM', 'ML']),
      preference: z.enum(['LOVED', 'LIKED', 'DISLIKED', 'NEUTRAL']),
      ingredient: z.string(),
    })
    .superRefine((data, ctx) => {
      if (data.startTime > data.endTime) {
        return ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Thời gian bắt đầu không thể lớn hơn thời gian kết thúc',
        });
      }
    }),
});

// Create Entry DTO
const createEntrySchema = z.object({
  data: z.discriminatedUnion('type', [
    PumpingEntrySchema,
    FeedingEntrySchema,
    DiaperEntrySchema,
    SleepEntrySchema,
    SolidFoodEntrySchema,
  ]),
});

export class CreateEntryDto extends createZodDto(createEntrySchema) {}

export type CreateEntrySchema = z.infer<typeof createEntrySchema>;

export * from './get.dto';
export * from './history.dto';
