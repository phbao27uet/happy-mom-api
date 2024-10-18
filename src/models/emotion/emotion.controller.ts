import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common'
import { Auth } from '@shared/decorators'
import { CreateEmotionDto, GetListEmotionDto } from './dto'
import { EmotionService } from './emotion.service'

@Controller('emotion')
export class EmotionController {
  constructor(private emotionService: EmotionService) {}

  @Auth('USER')
  @Get('')
  async findAll(@Query() getListDto: GetListEmotionDto) {
    return this.emotionService.findAll(getListDto)
  }

  @Auth('USER')
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.emotionService.findOne(id)
  }

  @Auth('USER')
  @Post('')
  async createOrUpdate(@Body() createDto: CreateEmotionDto) {
    return this.emotionService.createOrUpdate(createDto)
  }
}
