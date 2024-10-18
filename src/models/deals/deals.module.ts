import { Module } from '@nestjs/common'
import { PrismaModule } from '@shared/prisma'
import { DealsController } from './deals.controller'
import { DealsService } from './deals.service'

@Module({
  imports: [PrismaModule],
  controllers: [DealsController],
  providers: [DealsService],
  exports: [DealsService],
})
export class DealsModule {}
