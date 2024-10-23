import { DefaultFindAllQueryDto } from '@models/base'
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common'
import { Auth, GetCurrentId } from '@shared/decorators'
import {
  CreateLogCycleDto,
  GetLogCycleDto,
  GetMonthlyCycleDto,
  SettingDto,
  UpdateLogCycleDto,
  UpdateSettingDto,
} from './dto'
import { ICycle } from './interfaces'
import { MenstrualCyclesLogService } from './menstrual-cycles-log.service'
import { MenstrualCyclesService } from './menstrual-cycles.service'

@Controller('menstrual-cycles')
export class MenstrualCyclesController {
  constructor(
    private readonly menstrualCyclesService: MenstrualCyclesService,
    private readonly menstrualCyclesLogService: MenstrualCyclesLogService,
  ) {}

  @Auth('USER')
  @Get()
  async findAll(
    @GetCurrentId() currentId: string,
    @Query() defaultFindAllQuery: DefaultFindAllQueryDto,
  ) {
    return this.menstrualCyclesService.findAll(currentId, defaultFindAllQuery)
  }

  @Auth('USER')
  @Get('monthly')
  async getMonthlyCycles(
    @GetCurrentId() currentId: string,
    @Query() getMonthlyCycleDto: GetMonthlyCycleDto,
  ): Promise<{
    month: string
    cycles: ICycle[]
  }> {
    return this.menstrualCyclesService.calculateMonthCycles(
      currentId,
      getMonthlyCycleDto,
    )
  }

  @Auth('USER')
  @Post('')
  async create(
    @GetCurrentId() currentId: string,
    @Body() settingDto: SettingDto,
  ) {
    return this.menstrualCyclesService.create(currentId, settingDto)
  }

  @Auth('USER')
  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateSettingDto) {
    return this.menstrualCyclesService.update(id, dto)
  }

  @Auth('USER')
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.menstrualCyclesService.delete(id)
  }

  // Logs
  @Auth('USER')
  @Get('logs')
  async getLogsCycle(
    @GetCurrentId() currentId: string,
    @Query() getLogCycleDto: GetLogCycleDto,
  ) {
    return this.menstrualCyclesLogService.findAll(currentId, getLogCycleDto)
  }

  @Auth('USER')
  @Get('logs/:id')
  async getLogCycle(@Param('id') id: string) {
    return this.menstrualCyclesLogService.getLogCycle(id)
  }

  @Auth('USER')
  @Post('logs')
  async createLogCycle(
    @GetCurrentId() currentId: string,
    @Body() dto: CreateLogCycleDto,
  ) {
    return this.menstrualCyclesLogService.createLogCycle(currentId, dto)
  }

  @Auth('USER')
  @Patch('logs/:id')
  async updateLogCycle(
    @Param('id') id: string,
    @Body() dto: UpdateLogCycleDto,
  ) {
    return this.menstrualCyclesLogService.updateLogCycle(id, dto)
  }

  @Auth('USER')
  @Delete('logs/:id')
  async deleteLogCycle(@Param('id') id: string) {
    return this.menstrualCyclesLogService.deleteLogCycle(id)
  }

  @Auth('USER')
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.menstrualCyclesService.findOne(id)
  }
}
