import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { differenceInMinutes } from 'date-fns'
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
        include: {
          _count: {
            select: {
              easyActiveAccounts: true,
            },
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
        include: {
          _count: {
            select: {
              easyActiveAccounts: true,
            },
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

  async create(accountId: string, createDto: CreateEasyDto) {
    const { easyActivityGroups, ...easy } = createDto

    const easyActivityGroupsToCreate: Prisma.EasyActivityGroupCreateWithoutEasyInput[] =
      easyActivityGroups?.map((group) => ({
        name: group.name,
        easyActivities: {
          create: group.easyActivities.map((activity) => ({
            startTime: activity.startTime,
            endTime: activity.endTime,
            note: activity.note,
            type: activity.type,
            duration: activity.endTime
              ? differenceInMinutes(activity.endTime, activity.startTime)
              : null,
          })),
        },
      })) || []

    const res = await this.prisma.easy.create({
      data: {
        ...easy,
        creatorId: accountId,
        easyActivityGroups: {
          create: easyActivityGroupsToCreate,
        },
      },
      include: {
        easyActivityGroups: {
          include: {
            easyActivities: true,
          },
        },
      },
    })

    return res
  }

  async findOne(id: string) {
    const res = await this.prisma.easy.findUniqueOrThrow({
      where: {
        id: id,
      },
      include: {
        easyActivityGroups: {
          include: {
            easyActivities: true,
          },
        },
      },
    })

    return res
  }

  async update(accountId: string, id: string, updateDto: UpdateGroupDto) {
    await this.prisma.easy.findUniqueOrThrow({
      where: {
        id: id,
        type: {
          not: 'DEFAULT',
        },
        creatorId: accountId, // Must be the creator
      },
    })

    const { easyActivityGroups, ...easy } = updateDto

    const res = await this.prisma.easy.update({
      where: {
        id: id,
        type: {
          not: 'DEFAULT',
        },
        creatorId: accountId, // Must be the creator
      },
      data: {
        ...easy,
        easyActivityGroups: {
          deleteMany: {
            easyId: id,
          },
          create:
            easyActivityGroups?.map((group) => ({
              name: group.name,
              easyActivities: {
                create: group.easyActivities.map((activity) => ({
                  startTime: activity.startTime,
                  endTime: activity.endTime,
                  note: activity.note,
                  type: activity.type,
                  duration: activity.endTime
                    ? differenceInMinutes(activity.endTime, activity.startTime)
                    : null,
                })),
              },
            })) || [],
        },
      },
      include: {
        easyActivityGroups: {
          include: {
            easyActivities: true,
          },
        },
      },
    })

    return res
  }

  async select(accountId: string, id: string) {
    await this.prisma.easy.findUniqueOrThrow({
      where: {
        id: id,
      },
    })

    return this.prisma.easyActiveAccount.upsert({
      where: {
        accountId,
      },
      update: {
        easyId: id,
      },
      create: {
        accountId,
        easyId: id,
      },
    })
  }

  async remove(accountId: string, id: string) {
    await this.prisma.easy.findUniqueOrThrow({
      where: {
        id: id,
        type: {
          not: 'DEFAULT',
        },
        creatorId: accountId, // Must be the creator
      },
    })

    return this.prisma.easy.delete({
      where: {
        id: id,
      },
    })
  }
}
