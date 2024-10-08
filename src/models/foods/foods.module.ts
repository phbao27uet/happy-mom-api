import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/shared/prisma/prisma.module'
import { FoodsController } from './foods.controller'
import { FoodsService } from './foods.service'

@Module({
  imports: [PrismaModule],
  providers: [FoodsService],
  controllers: [FoodsController],
  exports: [FoodsService],
})
export class FoodsModule {}
