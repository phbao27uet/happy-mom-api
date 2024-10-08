import { DefaultFindAllQueryDto } from '@models/base'
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common'
import { Auth } from '@shared/decorators'
import { CreateRecipeDto } from './dto'
import { UpdateRecipeDto } from './dto/update.dto'
import { RecipesService } from './recipes.service'

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Auth('USER', 'ADMIN')
  @Get('')
  async findAll(@Query() queryDto: DefaultFindAllQueryDto) {
    return this.recipesService.findAll(queryDto)
  }

  @Auth('USER', 'ADMIN')
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.recipesService.findOne(id)
  }

  @Auth('USER')
  @Get('by-category/:categoryId')
  async findByCategory(
    @Param('categoryId') categoryId: string,
    @Query() queryDto: DefaultFindAllQueryDto,
  ) {
    return this.recipesService.findByCategory(categoryId, queryDto)
  }

  @Auth('USER')
  @Get('by-sub-category/:subCategoryId')
  async findBySubCategory(
    @Param('subCategoryId') subCategoryId: string,
    @Query() queryDto: DefaultFindAllQueryDto,
  ) {
    return this.recipesService.findBySubCategory(subCategoryId, queryDto)
  }

  @Auth('ADMIN')
  @Post('')
  async create(@Body() createArticleDto: CreateRecipeDto) {
    return this.recipesService.create(createArticleDto)
  }

  @Auth('ADMIN')
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateArticleDto: UpdateRecipeDto,
  ) {
    return this.recipesService.update(id, updateArticleDto)
  }

  @Auth('ADMIN')
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.recipesService.remove(id)
  }
}
