import { Controller, Get } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { Auth } from '@shared/decorators';

@Controller('groups')
export class GroupsController {
  constructor(private groupsService: GroupsService) {}

  @Auth('USER')
  @Get('options')
  async updateProfile() {
    return this.groupsService.getOptions();
  }
}
