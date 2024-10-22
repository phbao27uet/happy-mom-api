import { Controller, Get, Param, Query } from '@nestjs/common'
import { Auth } from '@shared/decorators'
import { GetMonthlyCycleDto } from './dto'
import { MenstrualCyclesService } from './menstrual-cycles.service'

@Controller('menstrual-cycles')
export class MenstrualCyclesController {
  constructor(
    private readonly menstrualCyclesService: MenstrualCyclesService,
  ) {}

  @Auth('USER')
  @Get('monthly')
  async getMonthyCycles(@Query() getMonthlyCycleDto: GetMonthlyCycleDto) {
    return this.menstrualCyclesService.calculateMonthCycles(getMonthlyCycleDto)
  }

  @Auth('USER')
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.menstrualCyclesService.findOne(id)
  }
}
