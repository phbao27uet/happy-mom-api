import { Controller, Post, Body } from '@nestjs/common';
import { NotificationService } from './notifications.service';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post('send')
  async sendNotification(
    @Body() body: { tokens: string[]; message: string; data?: object },
  ) {
    await this.notificationService.sendPushNotification(
      body.tokens,
      body.message,
      body.data,
    );
    return { success: true };
  }
}
