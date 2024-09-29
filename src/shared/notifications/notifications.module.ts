import { Module } from '@nestjs/common';
import { NotificationService } from './notifications.service';
import { ScheduleModule } from '@nestjs/schedule';
import { NotificationController } from './notifications.controller';
@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [NotificationService],
  controllers: [NotificationController],
  exports: [NotificationService],
})
export class NotificationsModule {}
