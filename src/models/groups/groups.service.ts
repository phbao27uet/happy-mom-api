import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Injectable()
export class GroupsService {
  constructor(private readonly prisma: PrismaService) {}

  async getOptions() {
    const groups = await this.prisma.group.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return groups.map((group) => ({
      value: group.id,
      label: group.name,
    }));
  }
}
