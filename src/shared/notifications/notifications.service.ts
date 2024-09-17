import { Injectable } from '@nestjs/common';
import { Expo, ExpoPushMessage } from 'expo-server-sdk';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';

interface ScheduledNotification {
  tokens: string[];
  message: string;
  data?: object;
  scheduleTime: Date;
  repeatPattern?: 'hourly' | 'daily';
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

  scheduleNotification(notification: ScheduledNotification) {
    const { tokens, message, data, scheduleTime, repeatPattern } = notification;

    // const _scheduleTime = addMinutes(new Date(), 1);

    console.log(
      `Scheduling notification: ${message} to be sent at ${scheduleTime}`,
    );

    const sendNotification = () => {
      this.sendPushNotification(tokens, message, data);
    };

    let job: CronJob;

    if (repeatPattern) {
      const cronPattern =
        repeatPattern === 'hourly' ? '0 * * * *' : '0 0 * * *';
      job = new CronJob(cronPattern, sendNotification);
    } else {
      job = new CronJob(scheduleTime, () => {
        sendNotification();
        this.schedulerRegistry.deleteCronJob(jobName);
      });
    }

    const jobName = `notification_${Date.now()}`;
    this.schedulerRegistry.addCronJob(jobName, job);
    job.start();

    if (scheduleTime > new Date()) {
      setTimeout(() => {
        sendNotification();
        if (!repeatPattern) {
          this.schedulerRegistry.deleteCronJob(jobName);
        }
      }, scheduleTime.getTime() - Date.now());
    }

    this.scheduledNotifications.push(notification);
    console.log(`Scheduled notification: ${jobName}`);
  }
}
