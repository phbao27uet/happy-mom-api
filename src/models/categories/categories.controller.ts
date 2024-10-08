import { Controller, Get, Param, Query } from '@nestjs/common'
import { Auth } from '@shared/decorators'
import { CategoriesService } from './categories.service'
import { GetCategoryDto } from './dto'

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Auth('ADMIN', 'USER')
  @Get()
  async getCategories(@Query() queryDto: GetCategoryDto) {
    return this.categoriesService.getCategories(queryDto)
  }

  @Auth('ADMIN', 'USER')
  @Get(':categoryId/sub-categories')
  async getSubCategories(@Param('categoryId') categoryId: string) {
    return this.categoriesService.getSubCategories(categoryId)
  }
}
