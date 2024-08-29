import { Controller, Get, Query } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { Auth } from '@shared/decorators';
import { DefaultFindAllQueryDto } from '@models/base';

@Controller('groups')
export class GroupsController {
  constructor(private groupsService: GroupsService) {}

  @Auth('ADMIN')
  @Get('')
  async findAll(@Query() queryDto: DefaultFindAllQueryDto) {
    return this.groupsService.findAll(queryDto);
  }

  @Auth('USER')
  @Get('options')
  async updateProfile() {
    return this.groupsService.getOptions();
  }
}
