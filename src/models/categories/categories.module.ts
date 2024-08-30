import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { PrismaModule } from '@shared/prisma';
import { CategoriesController } from './categories.controller';

@Module({
  imports: [PrismaModule],
  controllers: [CategoriesController],
  providers: [CategoriesService],
  exports: [CategoriesService],
})
export class CategoriesModule {}
