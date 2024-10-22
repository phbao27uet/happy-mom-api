import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/shared/prisma/prisma.module'
import { MenstrualCyclesController } from './menstrual-cycle.controller'
import { MenstrualCyclesService } from './menstrual-cycles.service'

@Module({
  imports: [PrismaModule],
  providers: [MenstrualCyclesService],
  controllers: [MenstrualCyclesController],
  exports: [MenstrualCyclesService],
})
export class MenstrualCyclesModule {}
