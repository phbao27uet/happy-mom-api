import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/shared/prisma/prisma.service'
import { CreateEasyDto, UpdateGroupDto } from '../dto'

@Injectable()
export class EasyService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(accountId: string) {
    const [myEasy, popularEasy] = await Promise.all([
      this.prisma.easy.findMany({
        where: {
          creatorId: accountId,
          type: {
            in: ['PRIVATE', 'PUBLIC'],
          },
        },
        orderBy: {
          easyActiveAccounts: {
            _count: 'desc',
          },
        },
      }),
      this.prisma.easy.findMany({
        where: {
          creatorId: {
            not: accountId,
          },
          type: {
            in: ['PUBLIC', 'DEFAULT'],
          },
        },
        orderBy: {
          easyActiveAccounts: {
            _count: 'desc',
          },
        },
        take: 20,
      }),
    ])

    return {
      popularEasy,
      myEasy,
    }
  }

  async create(createDto: CreateEasyDto) {
    return 'Create E.A.S.Y'
  }

  async findOne(id: string) {
    const res = await this.prisma.easy.findUnique({
      where: {
        id: id,
      },
    })

    if (!res) {
      throw new NotFoundException('EASY không tồn tại')
    }

    return res
  }

  async update(id: string, updateDto: UpdateGroupDto) {
    const res = await this.prisma.easy.findUnique({
      where: {
        id: id,
      },
    })

    if (!res) {
      throw new NotFoundException('EASY không tồn tại')
    }

    return this.prisma.easy.update({
      where: {
        id: id,
      },
      data: {
        ...updateDto,
      },
    })
  }

  async remove(accountId: string, id: string) {
    const res = await this.prisma.easy.findUnique({
      where: {
        id: id,
        type: {
          not: 'DEFAULT',
        },
        creatorId: accountId, // Must be the creator
      },
    })

    if (!res) {
      throw new NotFoundException('Lịch E.A.S.Y không tồn tại')
    }

    return this.prisma.easy.delete({
      where: {
        id: id,
      },
    })
  }
}
