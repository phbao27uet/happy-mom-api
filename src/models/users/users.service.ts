import { ConflictException, Injectable } from '@nestjs/common'

import { faker } from '@faker-js/faker/locale/vi'
import { PrismaService } from 'src/shared/prisma/prisma.service'
import { ElementalType, GetNamingForChildDto, UpdateUserDto } from './dto'

@Injectable()
export class UsersService {
  private readonly elementalNames: Record<
    ElementalType,
    {
      MALE: string[]
      FEMALE: string[]
    }
  > = {
    METAL: {
      MALE: [
        'Chung',
        'Cương',
        'Doãn',
        'Hữu',
        'Khanh',
        'Luyện',
        'Nghĩa',
        'Nguyên',
        'Nhâm',
        'Phong',
        'Thăng',
        'Thắng',
        'Thế',
        'Thiết',
        'Tiền',
        'Văn',
      ],
      FEMALE: [
        'Ái',
        'Dạ',
        'Đoan',
        'Hân',
        'Hiền',
        'Hiện',
        'Mỹ',
        'Ngân',
        'Nhi',
        'Phượng',
        'Tâm',
        'Trang',
        'Vân',
        'Vi',
        'Xuyến',
      ],
    },
    WOOD: {
      MALE: [
        'Khôi',
        'Bách',
        'Bản',
        'Bính',
        'Bình',
        'Cung',
        'Đỗ',
        'Đông',
        'Hộ',
        'Khôi',
        'Kỳ',
        'Lâm',
        'Nam',
        'Nhân',
        'Phúc',
        'Phước',
        'Quảng',
        'Quý',
        'Tùng',
        'Duy',
      ],
      FEMALE: [
        'Bạch',
        'Chi',
        'Cúc',
        'Đào',
        'Giao',
        'Hạnh',
        'Huệ',
        'Hương',
        'Lam',
        'Lan',
        'Lê',
        'Liễu',
        'Lý',
        'Mai',
        'Phương',
        'Quỳnh',
        'Sa',
        'Sâm',
        'Thảo',
        'Thư',
        'Tích',
        'Tiêu',
        'Trà',
        'Trúc',
        'Vị',
        'Xuân',
      ],
    },
    WATER: {
      MALE: [
        'Võ',
        'Hội',
        'Hải',
        'Quang',
        'Nhậm',
        'Trí',
        'Trọng',
        'Hoàn',
        'Hồ',
        'Hà',
        'Nhâm',
        'Nhuận',
        'Luân',
        'Dư',
        'Tiến',
        'Toàn',
        'Cung',
        'Hưng',
        'Quân',
        'Quyết',
        'Lưu',
      ],
      FEMALE: [
        'Sương',
        'Thủy',
        'Giao',
        'Giang',
        'Vũ',
        'Tuyên',
        'Thương',
        'Lệ',
        'Tiên',
        'Băng',
        'Bùi',
        'Khê',
        'Kiều',
        'Hàn',
        'Loan',
        'Băng',
      ],
    },
    FIRE: {
      MALE: [
        'Luyện',
        'Quang',
        'Huân',
        'Nam',
        'Thước',
        'Đăng',
        'Đức',
        'Bội',
        'Nhiên',
        'Hạ',
        'Cẩm',
        'Thanh',
        'Tiết',
        'Kim',
      ],
      FEMALE: [
        'Ánh',
        'Đài',
        'Hạ',
        'Cẩm',
        'Đan',
        'Cẩn',
        'Hồng',
        'Thanh',
        'Kim',
        'Tiết',
        'Bội',
        'Thu',
        'Nhiên',
        'Dung',
      ],
    },
    EARTH: {
      MALE: [
        'Sơn',
        'Côn',
        'Lý',
        'Thân',
        'Thông',
        'Giáp',
        'Thạc',
        'Kiên',
        'Tự',
        'Bảo',
        'Kiệt',
        'Thành',
        'Đại',
      ],
      FEMALE: [
        'Châu',
        'Ngọc',
        'San',
        'Cát',
        'Viên',
        'Nghiêm',
        'Châm',
        'Anh',
        'Chân',
        'Diệp',
        'Bích',
      ],
    },
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
    try {
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
          this.elementalNames[dto.elemental][dto.gender],
        )
      } else {
        throw new ConflictException('Invalid type')
      }

      return {
        name: `${dto.lastName}${middleName ? ` ${middleName}` : ''} ${firstName}`,
      }
    } catch (error) {
      console.log(error)
    }
  }
}
