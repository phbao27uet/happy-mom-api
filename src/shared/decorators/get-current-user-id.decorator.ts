import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtPayload } from 'src/models/auth/types';

export const GetCurrentId = createParamDecorator(
  (_: undefined, context: ExecutionContext): string => {
    const request = context.switchToHttp().getRequest();
    const user = request.user as JwtPayload;
    return user.accountId;
  },
);
