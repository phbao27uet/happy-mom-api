import { DefaultFindAllQueryDto } from '@models/base'
import { Controller, Get, Param, Post, Query } from '@nestjs/common'
import { Auth, GetCurrentId } from '@shared/decorators'
import { StoriesService } from './stories.service'

@Controller('stories')
export class StoriesController {
  constructor(private readonly storiesService: StoriesService) {}

  @Auth('USER')
  @Get('')
  async findAll(@Query() queryDto: DefaultFindAllQueryDto) {
    return this.storiesService.findAll(queryDto)
  }

  @Auth('USER')
  @Get('by-category/:categoryId')
  async findByCategory(@Param('categoryId') categoryId: string) {
    return this.storiesService.findByCategory(categoryId)
  }

  @Auth('USER')
  @Get('saved')
  async findSaved(@GetCurrentId() accountId: string) {
    return this.storiesService.findSaved(accountId)
  }

  @Auth('USER')
  @Get(':id')
  async findOne(@GetCurrentId() accountId: string, @Param('id') id: string) {
    return this.storiesService.findOne(accountId, id)
  }

  @Auth('USER')
  @Post(':id/save-toggle')
  async save(@Param('id') id: string, @GetCurrentId() accountId: string) {
    return this.storiesService.save(accountId, id)
  }
}
