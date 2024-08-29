import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Auth } from '@shared/decorators';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Auth('ADMIN', 'USER')
  @Get()
  async getCategories() {
    return this.categoriesService.getCategories();
  }

  @Auth('ADMIN', 'USER')
  @Get(':categoryId/sub-categories')
  async getSubCategories(categoryId: string) {
    return this.categoriesService.getSubCategories(categoryId);
  }
}
