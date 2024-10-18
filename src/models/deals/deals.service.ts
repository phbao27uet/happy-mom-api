import { JwtPayloadWithRt } from '@models/auth/types'
import { ConflictException, Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from '@shared/prisma'
import { CreateDealDto, GetDealDto, UpdateDealDto } from './dto'

@Injectable()
export class DealsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(getDealDto: GetDealDto, user: JwtPayloadWithRt) {
    const { perPage = 20, page = 1, type, searchOne } = getDealDto

    const where: Prisma.DealWhereInput = {
      type: type === 'ALL' ? undefined : type,
      name: {
        contains: searchOne,
        mode: 'insensitive',
      },
    }

    if (user.role === 'USER') {
      where.expiredAt = {
        gte: new Date(),
      }
    }

    const [total, data] = await Promise.all([
      this.prisma.deal.count({
        where: where,
      }),
      this.prisma.deal.findMany({
        where: where,
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          ...(user.role === 'USER' && {
            userDealUsages: {
              where: {
                accountId: user.accountId,
              },
            },
          }),
        },
        skip: page && perPage ? (page - 1) * perPage : undefined,
        take: page && perPage ? perPage : undefined,
      }),
    ])

    return {
      data: data,
      meta: {
        currentPage: page,
        perPage,
        total: total ?? 0,
        totalPages: Math.ceil((total ?? 0) / perPage),
      },
    }
  }

  async findOne(accountId: string, id: string) {
    return this.prisma.deal.findUniqueOrThrow({
      where: {
        id,
      },
      include: {
        userDealUsages: {
          where: {
            accountId,
          },
        },
      },
    })
  }

  async create(createDealDto: CreateDealDto) {
    return this.prisma.deal.create({
      data: {
        ...createDealDto,
      },
    })
  }

  async update(id: string, updateDealDto: UpdateDealDto) {
    await this.prisma.deal.findUniqueOrThrow({
      where: {
        id,
      },
    })

    return this.prisma.deal.update({
      where: {
        id,
      },
      data: {
        ...updateDealDto,
      },
    })
  }

  async delete(id: string) {
    await this.prisma.deal.findUniqueOrThrow({
      where: {
        id,
      },
    })

    return this.prisma.deal.delete({
      where: {
        id,
      },
    })
  }

  async use(accountId: string, id: string) {
    const now = new Date()

    const result = await this.prisma.$transaction(async (prisma) => {
      const existingUsage = await prisma.userDealUsage.findUnique({
        where: {
          accountId_dealId: {
            accountId,
            dealId: id,
          },
        },
      })

      if (existingUsage) {
        throw new ConflictException('Bạn đã sử dụng deal này rồi')
      }

      const deal = await prisma.deal.findUnique({
        where: {
          id,
        },
      })

      if (!deal) {
        throw new ConflictException('Deal không tồn tại')
      }

      if (deal.expiredAt < now) {
        throw new ConflictException('Deal đã hết hạn')
      }

      const updatedDeal = await prisma.deal.update({
        where: {
          id,
          expiredAt: { gt: now },
        },
        data: {
          userDealUsages: {
            create: {
              accountId,
            },
          },
        },
      })

      return updatedDeal
    })

    return result
  }
}
