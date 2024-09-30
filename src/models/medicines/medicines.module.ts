import { Module } from '@nestjs/common';
import { MedicinesService } from './medicines.service';
import { MedicinesController } from './medicines.controller';
import { PrismaModule } from 'src/shared/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [MedicinesService],
  controllers: [MedicinesController],
  exports: [MedicinesService],
})
export class MedicinesModule {}
