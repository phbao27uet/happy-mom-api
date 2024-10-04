import { Injectable } from '@nestjs/common';
import { Event, Prisma } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { DefaultFindAllQueryDto } from '@models/base';
import { CreateEventDto, UpdateEventDto } from './dto';

@Injectable()
export class EventsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllPagination(defaultFindAllQuery: DefaultFindAllQueryDto) {
    const { perPage = 20, page = 1 } = defaultFindAllQuery;

    const where: Prisma.EventWhereInput = {};

    try {
      const [total, data] = await Promise.all([
        this.prisma.event.count({ where }),
        this.prisma.event.findMany({
          where,
          orderBy: { createdAt: 'desc' },
          skip: page > 0 && perPage > 0 ? (page - 1) * perPage : undefined,
          take: perPage > 0 ? perPage : undefined,
        }),
      ]);

      return {
        data,
        meta: {
          currentPage: page,
          perPage,
          total: total ?? 0,
          totalPages: Math.ceil((total ?? 0) / perPage),
        },
      };
    } catch (error) {
      console.error('Error fetching events:', error);
      throw new Error('Unable to retrieve events at this time.');
    }
  }

  async findAll(): Promise<Event[]> {
    return this.prisma.event.findMany();
  }

  async findOne(id: string): Promise<Event | null> {
    return this.prisma.event.findUnique({ where: { id } });
  }

  async create(createEventDto: CreateEventDto): Promise<Event> {
    return this.prisma.event.create({ data: createEventDto });
  }

  async update(id: string, updateEventDto: UpdateEventDto): Promise<Event> {
    return this.prisma.event.update({
      where: { id },
      data: updateEventDto,
    });
  }

  async remove(id: string): Promise<Event> {
    return this.prisma.event.delete({ where: { id } });
  }
}
