import { Module } from '@nestjs/common';
import { AlarmsService } from './alarms.service';
import { AlarmsController } from './alarms.controller';
import { PrismaModule } from 'src/shared/prisma/prisma.module';
import { NotificationsModule } from '@shared/notifications/notifications.module';

@Module({
  imports: [PrismaModule, NotificationsModule],
  providers: [AlarmsService],
  controllers: [AlarmsController],
  exports: [AlarmsService],
})
export class AlarmsModule {}
