import { Body, Controller, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { Auth, GetCurrentId } from '@shared/decorators';
import { UpdateUserDto } from './dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Auth('USER')
  @Patch('')
  async updateProfile(
    @GetCurrentId() currentId: string,
    @Body() dto: UpdateUserDto,
  ) {
    return this.usersService.updateProfile(currentId, dto);
  }
}
