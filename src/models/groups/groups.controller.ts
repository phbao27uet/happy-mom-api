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
import { Auth } from '@shared/decorators'
import { CreateGroupDto, UpdateGroupDto } from './dto'
import { GroupsService } from './groups.service'

@Controller('groups')
export class GroupsController {
  constructor(private groupsService: GroupsService) {}

  @Auth('ADMIN')
  @Get('')
  async findAll(@Query() queryDto: DefaultFindAllQueryDto) {
    return this.groupsService.findAll(queryDto)
  }

  @Auth('ADMIN', 'USER')
  @Get('options')
  async getOptions() {
    return this.groupsService.getOptions()
  }

  @Auth('ADMIN')
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.groupsService.findOne(id)
  }

  @Auth('ADMIN')
  @Post('')
  async create(@Body() createDto: CreateGroupDto) {
    return this.groupsService.create(createDto)
  }

  @Auth('ADMIN')
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDto: UpdateGroupDto) {
    return this.groupsService.update(id, updateDto)
  }

  @Auth('ADMIN')
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.groupsService.remove(id)
  }
}
