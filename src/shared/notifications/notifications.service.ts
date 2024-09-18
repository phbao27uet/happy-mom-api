import { Injectable } from '@nestjs/common';
import { Expo, ExpoPushMessage } from 'expo-server-sdk';
import { SchedulerRegistry } from '@nestjs/schedule';

interface ScheduledNotification {
  tokens: string[];
  message: string;
  data?: object;
  scheduleTime: Date;
}

@Injectable()
export class NotificationService {
  private expo: Expo;
  private scheduledNotifications: ScheduledNotification[] = [];

  constructor(private schedulerRegistry: SchedulerRegistry) {
    this.expo = new Expo();
  }

  async sendPushNotification(
    pushTokens: string[],
    message: string,
    data?: object,
  ) {
    const messages: ExpoPushMessage[] = [];

    console.log('Sending push notification');

    for (const pushToken of pushTokens) {
      if (!Expo.isExpoPushToken(pushToken)) {
        console.error(`Push token ${pushToken} is not a valid Expo push token`);
        continue;
      }

      messages.push({
        to: pushToken,
        sound: 'default',
        body: message,
        data: data,
      });
    }

    const chunks = this.expo.chunkPushNotifications(messages);

    for (const chunk of chunks) {
      try {
        const ticketChunk = await this.expo.sendPushNotificationsAsync(chunk);
        console.log(ticketChunk);
      } catch (error) {
        console.error(error);
      }
    }
  }
}
