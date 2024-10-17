import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_PIPE } from '@nestjs/core'
import { ScheduleModule } from '@nestjs/schedule'
import { NotificationsModule } from '@shared/notifications/notifications.module'
import { ZodValidationPipe } from 'nestjs-zod'
import { AlarmsModule } from './alarms/alarms.module'
import { AppController } from './app.controller'
import { ArticlesModule } from './articles/articles.module'
import { AuthModule } from './auth/auth.module'
import { BabyDiariesModule } from './baby-diaries/baby-diaries.module'
import { BabyTrackingModule } from './baby-tracking/baby-tracking.module'
import { CategoriesModule } from './categories/categories.module'
import { CommentsModule } from './comments/comments.module'
import configurations from './configurations'
import { DealsModule } from './deals/deals.module'
import { EarlyEducationsModule } from './early-educations/early-educations.module'
import { EasyModule } from './easy/easy.module'
import { EmotionModule } from './emotion/emotion.module'
import { FoodsModule } from './foods/foods.module'
import { FriendsModule } from './friends/friends.module'
import { GroupsModule } from './groups/groups.module'
import { LikesModule } from './likes/likes.module'
import { MedicinesModule } from './medicines/medicines.module'
import { OTPModule } from './otp/otp.module'
import { PostsModule } from './posts/posts.module'
import { RecipesModule } from './recipes/recipes.module'
import { SmsModule } from './sms/sms.module'
import { StoriesModule } from './stories/stories.module'
import { TeethModule } from './teeth/teeth.module'
import { UploadModule } from './upload/upload.module'
import { UsersModule } from './users/users.module'
import { VaccinesModule } from './vaccines/vaccines.module'

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
    FriendsModule,
    RecipesModule,
    EasyModule,
    TeethModule,
    EmotionModule,
    StoriesModule,
    DealsModule,
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
