import { ConflictException, Injectable } from '@nestjs/common'

import { faker } from '@faker-js/faker/locale/vi'
import { PrismaService } from 'src/shared/prisma/prisma.service'
import { ElementalType, GetNamingForChildDto, UpdateUserDto } from './dto'

@Injectable()
export class UsersService {
  private readonly elementalNames: Record<ElementalType, string[]> = {
    METAL: ['Khánh', 'Khôi', 'Kim', 'Kiều', 'Khang'],
    WOOD: ['Trúc', 'Lâm', 'Mộc', 'Mai', 'Linh'],
    WATER: ['Thủy', 'Hải', 'Giang', 'Triều', 'Ngọc'],
    FIRE: ['Hỏa', 'Dương', 'Minh', 'Nhật', 'Hồng'],
    EARTH: ['Địa', 'Sơn', 'Thổ', 'Châu', 'Hoàng'],
  }

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
    })

    return user
  }

  async getNamingForChild(dto: GetNamingForChildDto) {
    let firstName: string
    let middleName = ''
    let firstCharacter: string

    if (dto.type === 'FIRST_CHARACTER' && dto.firstCharacter) {
      do {
        firstName = faker.person.firstName(
          dto.gender === 'MALE' ? 'male' : 'female',
        )
        const firstNames = firstName.split(' ')
        firstCharacter = firstNames[firstNames.length - 1][0]
      } while (
        firstCharacter.toLowerCase() !== dto.firstCharacter.toLowerCase()
      )
    } else if (dto.type === 'ELEMENTAL' && dto.elemental) {
      firstName = faker.person.firstName(
        dto.gender === 'MALE' ? 'male' : 'female',
      )

      middleName = faker.helpers.arrayElement(
        this.elementalNames[dto.elemental],
      )
    } else {
      throw new ConflictException('Invalid type')
    }

    return {
      name: `${dto.lastName} ${middleName} ${firstName}`,
    }
  }
}
