import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configurations from './configurations';
import { AuthModule } from './auth/auth.module';
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { GroupsModule } from './groups/groups.module';
import { OTPModule } from './otp/otp.module';
import { UploadModule } from './upload/upload.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { LikesModule } from './likes/likes.module';
import { SmsModule } from './sms/sms.module';
import { ArticlesModule } from './articles/articles.module';
import { CategoriesModule } from './categories/categories.module';
import { BabyDiariesModule } from './baby-diaries/baby-diaries.module';
import { FoodsModule } from './foods/foods.module';
import { AlarmsModule } from './alarms/alarms.module';
import { VaccinesModule } from './vaccines/vaccines.module';
import { NotificationsModule } from '@shared/notifications/notifications.module';
import { ScheduleModule } from '@nestjs/schedule';
import { BabyTrackingModule } from './baby-tracking/baby-tracking.module';
import { MedicinesModule } from './medicines/medicines.module';
import { EarlyEducationsModule } from './early-educations/early-educations.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: [configurations],
    }),
    ScheduleModule.forRoot(),
    AuthModule,
    UsersModule,
    GroupsModule,
    OTPModule,
    UploadModule,
    PostsModule,
    CommentsModule,
    LikesModule,
    CommentsModule,
    SmsModule,
    ArticlesModule,
    CategoriesModule,
    BabyDiariesModule,
    FoodsModule,
    AlarmsModule,
    VaccinesModule,
    NotificationsModule,
    BabyTrackingModule,
    MedicinesModule,
    EarlyEducationsModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
