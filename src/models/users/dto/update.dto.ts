import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const genderSchema = z.enum(['MALE', 'FEMALE', 'OTHER']);

const updateUserSchema = z.object({
  pregnancyStatus: z.enum([
    'WISHING',
    'PREGNANT',
    'HAS_CHILDREN',
    'NOT_WANTING',
  ]),
  groupIds: z.array(z.string()).optional(),
  userInformation: z
    .object({
      fullName: z.string().optional(),
      dob: z.date().optional(),
      gender: genderSchema.optional(),
      address: z.string().optional(),
      province: z.string().optional(),
      district: z.string().optional(),
      ward: z.string().optional(),
    })
    .optional(),
  childs: z
    .array(
      z
        .object({
          fullName: z.string().optional(),
          nickname: z.string().optional(),
          status: z.enum(['UNBORN', 'BORN']),
          birthDate: z.date().optional(),
          dueDate: z.date().optional(),
          gender: genderSchema,
        })
        .superRefine((data, ctx) => {
          if (data.status === 'BORN' && !data.birthDate) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: 'Ngày sinh không được để trống',
            });
          }

          if (data.status === 'UNBORN' && !data.dueDate) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: 'Ngày dự sinh không được để trống',
            });
          }
        }),
    )
    .optional(),
});

export class UpdateUserDto extends createZodDto(updateUserSchema) {}
