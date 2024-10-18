import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common'
import { Auth } from '@shared/decorators'
import { CreateToothGrowthDto, GetTeethDto } from './dto'
import { TeethService } from './teeth.service'

@Controller('teeth')
export class TeethController {
  constructor(private teethService: TeethService) {}

  @Auth('USER')
  @Get('')
  async findAll() {
    return this.teethService.findAll()
  }

  @Auth('USER')
  @Get(':id')
  async findOne(@Param('id') id: string, @Query() getTeethDto: GetTeethDto) {
    return this.teethService.findOne(id, getTeethDto)
  }

  @Auth('USER')
  @Post(':id/children')
  async createForChild(
    @Param('id') id: string,
    @Body() createDto: CreateToothGrowthDto,
  ) {
    return this.teethService.createForChild(id, createDto)
  }
}
