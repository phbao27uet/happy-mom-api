import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/shared/prisma/prisma.service'

@Injectable()
export class EasyActivityService {
  constructor(private readonly prisma: PrismaService) {}
}
