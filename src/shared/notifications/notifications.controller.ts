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

  @Post('schedule')
  scheduleNotification(
    @Body()
    body: {
      tokens: string[];
      message: string;
      data?: object;
      scheduleTime: string;
      repeatPattern?: 'hourly' | 'daily';
    },
  ) {
    const scheduleTime = new Date(body.scheduleTime);
    this.notificationService.scheduleNotification({
      tokens: body.tokens,
      message: body.message,
      data: body.data,
      scheduleTime,
      repeatPattern: body.repeatPattern,
    });
    return { success: true };
  }
}
