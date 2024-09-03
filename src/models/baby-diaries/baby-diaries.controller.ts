import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { BabyDiariesService } from './baby-diaries.service';
import { Auth, GetCurrentId } from '@shared/decorators';
import { CreateDiaryDto, UpdateDiaryDto, GetListDiaryDto } from './dto';

@Controller('baby-diaries')
export class BabyDiariesController {
  constructor(private readonly babyDiariesService: BabyDiariesService) {}

  @Auth('USER', 'ADMIN')
  @Get('')
  async findAll(@Query() queryDto: GetListDiaryDto) {
    return this.babyDiariesService.findAll(queryDto);
  }

  @Auth('USER', 'ADMIN')
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.babyDiariesService.findOne(id);
  }

  @Auth('USER')
  @Post('')
  async create(
    @GetCurrentId() currentId: string,
    @Body() createDiaryDto: CreateDiaryDto,
  ) {
    return this.babyDiariesService.create(currentId, createDiaryDto);
  }

  @Auth('USER')
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDiaryDto: UpdateDiaryDto,
  ) {
    return this.babyDiariesService.update(id, updateDiaryDto);
  }

  @Auth('USER')
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.babyDiariesService.remove(id);
  }
}
