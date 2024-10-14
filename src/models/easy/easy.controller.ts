import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'
import { Auth, GetCurrentId } from '@shared/decorators'
import { CreateEasyDto, UpdateGroupDto } from './dto'
import { EasyService } from './services/easy.service'

@Controller('easy')
export class EasyController {
  constructor(private easyService: EasyService) {}

  @Auth('USER')
  @Get('')
  async findAll(@GetCurrentId() currentId: string) {
    return this.easyService.findAll(currentId)
  }

  @Auth('USER')
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.easyService.findOne(id)
  }

  @Auth('USER')
  @Post('')
  async create(@Body() createDto: CreateEasyDto) {
    return this.easyService.create(createDto)
  }

  @Auth('USER')
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDto: UpdateGroupDto) {
    return this.easyService.update(id, updateDto)
  }

  @Auth('USER')
  @Delete(':id')
  async remove(@GetCurrentId() currentId: string, @Param('id') id: string) {
    return this.easyService.remove(currentId, id)
  }
}
