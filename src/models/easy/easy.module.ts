import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/shared/prisma/prisma.module'
import { EasyController } from './easy.controller'
import {
  EasyActivityGroupService,
  EasyActivityService,
  EasyService,
} from './services'

@Module({
  imports: [PrismaModule],
  providers: [EasyService, EasyActivityGroupService, EasyActivityService],
  controllers: [EasyController],
  exports: [EasyService],
})
export class EasyModule {}
