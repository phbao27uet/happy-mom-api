import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/shared/prisma/prisma.module'
import { MenstrualCyclesController } from './menstrual-cycle.controller'
import { MenstrualCyclesLogService } from './menstrual-cycles-log.service'
import { MenstrualCyclesService } from './menstrual-cycles.service'

@Module({
  imports: [PrismaModule],
  providers: [MenstrualCyclesService, MenstrualCyclesLogService],
  controllers: [MenstrualCyclesController],
  exports: [MenstrualCyclesService, MenstrualCyclesLogService],
})
export class MenstrualCyclesModule {}
