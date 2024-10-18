import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/shared/prisma/prisma.service'

@Injectable()
export class EasyActivityGroupService {
  constructor(private readonly prisma: PrismaService) {}
}
