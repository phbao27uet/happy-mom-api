import { DefaultFindAllQueryDto } from '@models/base'
import { Controller, Delete, Get, Param, Query } from '@nestjs/common'
import { Auth } from '@shared/decorators'
import { GetListFoodDto } from './dto'
import { FoodsService } from './foods.service'

@Controller('foods')
export class FoodsController {
  constructor(private readonly foodsService: FoodsService) {}

  @Auth('USER', 'ADMIN')
  @Get('')
  async findAll(@Query() queryDto: GetListFoodDto) {
    return this.foodsService.findAll(queryDto)
  }

  @Auth('USER', 'ADMIN')
  @Get('food-categories')
  async findAllFoodCategories(@Query() queryDto: DefaultFindAllQueryDto) {
    return this.foodsService.findAllFoodCategories(queryDto)
  }

  @Auth('USER', 'ADMIN')
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.foodsService.findOne(id)
  }

  // @Auth('ADMIN')
  // @Post('')
  // async create(
  //   @GetCurrentId() currentId: string,
  //   @Body() createDiaryDto: CreateDiaryDto,
  // ) {
  //   return this.foodsService.create(currentId, createDiaryDto);
  // }

  // @Auth('ADMIN')
  // @Patch(':id')
  // async update(
  //   @Param('id') id: string,
  //   @Body() updateDiaryDto: UpdateDiaryDto,
  // ) {
  //   return this.foodsService.update(id, updateDiaryDto);
  // }

  @Auth('ADMIN')
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.foodsService.remove(id)
  }
}
