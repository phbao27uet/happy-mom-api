import { Module } from '@nestjs/common';
import { VaccinesController } from './vaccines.controller';
import { PrismaModule } from '@shared/prisma';
import { VaccinesService } from './vaccines.service';

@Module({
  controllers: [VaccinesController],
  imports: [PrismaModule],
  providers: [VaccinesService],
})
export class VaccinesModule {}
