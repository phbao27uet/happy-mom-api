import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/shared/prisma/prisma.module'
import { TeethController } from './teeth.controller'
import { TeethService } from './teeth.service'

@Module({
  imports: [PrismaModule],
  providers: [TeethService],
  controllers: [TeethController],
  exports: [TeethService],
})
export class TeethModule {}
