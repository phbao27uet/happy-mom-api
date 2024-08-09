import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/shared/prisma/prisma.service';
import { UpdateUserDto } from './dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async updateProfile(currentId: string, dto: UpdateUserDto) {
    const user = await this.prisma.account.update({
      where: {
        id: currentId,
      },
      data: {
        user: {
          upsert: {
            where: {
              accountId: currentId,
            },
            create: {
              pregnancyStatus: dto.pregnancyStatus,
              memberships: {
                create: dto.groupIds?.map((groupId) => ({
                  group: {
                    connect: {
                      id: groupId,
                    },
                  },
                })),
              },
              ...dto.userInformation,

              ...(dto.childs && {
                childs: {
                  createMany: {
                    data: dto.childs,
                  },
                },
              }),
            },
            update: {},
          },
        },
      },
      select: {
        id: true,
        username: true,
      },
    });

    return user;
  }
}
