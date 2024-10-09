import { Body, Controller, Get, Patch, Query } from '@nestjs/common'
import { Auth, GetCurrentId } from '@shared/decorators'
import { GetNamingForChildDto, UpdateUserDto } from './dto'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Auth('USER')
  @Patch('')
  async updateProfile(
    @GetCurrentId() currentId: string,
    @Body() dto: UpdateUserDto,
  ) {
    return this.usersService.updateProfile(currentId, dto)
  }

  @Auth('USER')
  @Get('naming-for-child')
  async getNamingForChild(@Query() dto: GetNamingForChildDto) {
    return this.usersService.getNamingForChild(dto)
  }
}
