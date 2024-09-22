import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

// Enums
const EntryType = z.enum([
  'PUMPING',
  'FEEDING',
  'DIAPER',
  'SLEEP',
  'SOLID_FOOD',
]);
const FeedingMethod = z.enum(['BREAST', 'BOTTLE']);
const MilkType = z.enum(['BREAST_MILK', 'FORMULA']);
const DiaperReason = z.enum(['PEE', 'POO', 'BOTH', 'DRY_CHANGE']);

// Base schemas
const BaseEntrySchema = z.object({
  note: z.string().optional(),
  imageUrl: z.string().optional(),
});

// Specific entry schemas
const PumpingEntrySchema = z.object({
  pumpCount: z.number().int().positive(),
  totalAmount: z.number().positive(),
  leftBreastAmount: z.number().positive().optional(),
  rightBreastAmount: z.number().positive().optional(),
});

const FeedingEntrySchema = z.object({
  feedingMethod: FeedingMethod,
  startTime: z.date(),
  endTime: z.date(),
  milkType: MilkType,
  amount: z.number().positive(),
  duration: z.number().int().positive(),
});

const DiaperEntrySchema = z.object({
  reason: DiaperReason,
  time: z.date(),
});

const SleepEntrySchema = z.object({
  startTime: z.date(),
  endTime: z.date(),
});

const SolidFoodEntrySchema = z.object({
  startTime: z.date(),
  endTime: z.date(),
  foodName: z.string(),
});

// Create Entry DTO
const CreateEntrySchema = BaseEntrySchema.extend({
  type: EntryType,
}).and(
  z.discriminatedUnion('type', [
    z.object({ type: z.literal('PUMPING'), pumpingEntry: PumpingEntrySchema }),
    z.object({ type: z.literal('FEEDING'), feedingEntry: FeedingEntrySchema }),
    z.object({ type: z.literal('DIAPER'), diaperEntry: DiaperEntrySchema }),
    z.object({ type: z.literal('SLEEP'), sleepEntry: SleepEntrySchema }),
    z.object({
      type: z.literal('SOLID_FOOD'),
      solidFoodEntry: SolidFoodEntrySchema,
    }),
  ]),
);

export class CreateEntryDto extends createZodDto(CreateEntrySchema) {}

// Update Entry DTO
const UpdateEntrySchema = CreateEntrySchema.partial();

export class UpdateEntryDto extends createZodDto(UpdateEntrySchema) {}

export type CreateEntryType = z.infer<typeof CreateEntrySchema>;
export type UpdateEntryType = z.infer<typeof UpdateEntrySchema>;
