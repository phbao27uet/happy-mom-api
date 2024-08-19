import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '@shared/prisma';
import { HandleRequestDto } from './dto';

@Injectable()
export class FriendsService {
  constructor(private readonly prisma: PrismaService) {}

  async getFriends(accountId: string) {
    return this.prisma.friend.findMany({
      where: {
        accountId,
        status: 'ACCEPTED',
      },
    });
  }

  async getFriendRequests(accountId: string) {
    return this.prisma.friend.findMany({
      where: {
        accountId,
        status: 'PENDING',
      },
    });
  }

  async createFriendRequest(accountId: string, friendId: string) {
    const requestExists = await this.prisma.friend.findFirst({
      where: {
        accountId,
        friendId,
        status: 'PENDING',
      },
    });

    if (requestExists) {
      throw new ConflictException('Lời mời đã tồn tại');
    }

    return this.prisma.friend.create({
      data: {
        accountId,
        friendId,
        status: 'PENDING',
      },
    });
  }

  /**
   *
   * @param accountId
   * @param requestDto
   * @description Phải là người nhận được lời mời kết bạn mới có thể xử lý lời mời (Chấp nhận hoặc từ chối)
   * @returns
   */
  async handleFriendRequest(accountId: string, requestDto: HandleRequestDto) {
    const res = await this.prisma.friend.updateMany({
      where: {
        friendId: accountId,
        id: requestDto.friendRequestId,
        status: 'PENDING',
      },
      data: {
        status: requestDto.status,
      },
    });

    if (res.count === 0) {
      throw new ConflictException('Không thể xử lý lời mời');
    }

    return res;
  }

  /**
   * @description Xóa lời mời kết bạn (Chỉ người gửi lời mời mới có thể xóa)
   * @param friendRequestId
   * @returns
   */
  async delete(friendRequestId: string) {
    return this.prisma.friend.delete({
      where: {
        id: friendRequestId,
      },
    });
  }
}
