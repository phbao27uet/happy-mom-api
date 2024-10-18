import { DefaultFindAllQueryDto } from '@models/base'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from '@shared/prisma'

@Injectable()
export class StoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(defaultFindAllQuery: DefaultFindAllQueryDto) {
    const { perPage = 20, page = 1, searchOne } = defaultFindAllQuery

    const where: Prisma.StoryWhereInput = {
      name: {
        contains: searchOne,
        mode: 'insensitive',
      },
    }

    const [total, data] = await Promise.all([
      this.prisma.story.count({
        where: where,
      }),
      this.prisma.story.findMany({
        where: where,
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          category: true,
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
    return this.prisma.story.findUnique({
      where: {
        id,
      },
      include: {
        category: true,
        savedStories: {
          where: {
            accountId,
          },
        },
      },
    })
  }

  async findByCategory(categoryId: string) {
    return this.prisma.story.findMany({
      where: {
        categoryId,
      },
      include: {
        category: true,
      },
    })
  }

  async findSaved(accountId: string) {
    return this.prisma.savedStory.findMany({
      where: {
        accountId,
      },
      include: {
        story: {
          include: {
            category: true,
          },
        },
      },
    })
  }

  async save(accountId: string, id: string) {
    const story = await this.prisma.story.findUniqueOrThrow({
      where: {
        id,
      },
    })

    const savedStory = await this.prisma.savedStory.findUnique({
      where: {
        accountId_storyId: {
          accountId,
          storyId: story.id,
        },
      },
    })

    if (savedStory) {
      return this.prisma.savedStory.delete({
        where: {
          id: savedStory.id,
        },
      })
    }

    return this.prisma.savedStory.create({
      data: {
        account: {
          connect: {
            id: accountId,
          },
        },
        story: {
          connect: {
            id: story.id,
          },
        },
      },
    })
  }
}
