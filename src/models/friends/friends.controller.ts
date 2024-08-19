import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Auth, GetCurrentId } from '@shared/decorators';
import { FriendsService } from './friends.service';
import { HandleRequestDto } from './dto';

@Auth('USER')
@Controller('friends')
export class FriendsController {
  constructor(private readonly friendsService: FriendsService) {}

  @Get('')
  async getFriends(@GetCurrentId() accountId: string) {
    return this.friendsService.getFriends(accountId);
  }

  @Get('requests')
  async getFriendRequests(@GetCurrentId() accountId: string) {
    return this.friendsService.getFriendRequests(accountId);
  }

  @Post('request')
  async createFriendRequest(
    @GetCurrentId() accountId: string,
    @Body('friendId') friendId: string,
  ) {
    return this.friendsService.createFriendRequest(accountId, friendId);
  }

  @Post('request/handle')
  async handleFriendRequest(
    @GetCurrentId() accountId: string,
    @Body() requestDto: HandleRequestDto,
  ) {
    return this.friendsService.handleFriendRequest(accountId, requestDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.friendsService.delete(id);
  }
}
