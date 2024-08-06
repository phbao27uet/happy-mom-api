import { Role } from '@prisma/client';

export type JwtPayload = {
  accountId: string;
  role: Role;
  username: string;
};
