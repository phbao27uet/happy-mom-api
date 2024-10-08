import { DefaultFindAllQueryDto } from '@models/base'
import { Injectable, NotFoundException } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from 'src/shared/prisma/prisma.service'
import { CreateGroupDto, UpdateGroupDto } from './dto'

@Injectable()
export class GroupsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(defaultFindAllQuery: DefaultFindAllQueryDto) {
    const { perPage = 20, page = 1, searchOne } = defaultFindAllQuery

    const where: Prisma.GroupWhereInput = {
      name: {
        contains: searchOne,
        mode: 'insensitive',
      },
    }

    const [total, data] = await Promise.all([
      this.prisma.group.count({
        where: where,
      }),
      this.prisma.group.findMany({
        where: where,
        orderBy: {
          createdAt: 'desc',
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

  async create(createDto: CreateGroupDto) {
    return this.prisma.group.create({
      data: {
        ...createDto,
      },
    })
  }

  async findOne(id: string) {
    const res = await this.prisma.group.findUnique({
      where: {
        id: id,
      },
    })

    if (!res) {
      throw new NotFoundException('Nhóm không tồn tại')
    }

    return res
  }

  async update(id: string, updateDto: UpdateGroupDto) {
    const res = await this.prisma.group.findUnique({
      where: {
        id: id,
      },
    })

    if (!res) {
      throw new NotFoundException('Nhóm không tồn tại')
    }

    return this.prisma.group.update({
      where: {
        id: id,
      },
      data: {
        ...updateDto,
      },
    })
  }

  async remove(id: string) {
    const res = await this.prisma.group.findUnique({
      where: {
        id: id,
      },
    })

    if (!res) {
      throw new NotFoundException('Nhóm không tồn tại')
    }

    return this.prisma.group.delete({
      where: {
        id: id,
      },
    })
  }

  async getOptions() {
    const groups = await this.prisma.group.findMany({})

    return groups.map((group) => ({
      value: group.id,
      label: group.name,
      data: group,
    }))
  }
}
