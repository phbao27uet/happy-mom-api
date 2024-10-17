import { JwtPayloadWithRt } from '@models/auth/types'
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
import { Auth, GetCurrentId, GetCurrentUser } from '@shared/decorators'
import { DealsService } from './deals.service'
import { CreateDealDto, GetDealDto, UpdateDealDto } from './dto'

@Controller('deals')
export class DealsController {
  constructor(private readonly dealsService: DealsService) {}

  @Auth('USER', 'ADMIN')
  @Get('')
  async findAll(
    @GetCurrentUser() user: JwtPayloadWithRt,
    @Query() queryDto: GetDealDto,
  ) {
    return this.dealsService.findAll(queryDto, user)
  }

  @Auth('USER', 'ADMIN')
  @Get(':id')
  async findOne(@GetCurrentId() accountId: string, @Param('id') id: string) {
    return this.dealsService.findOne(accountId, id)
  }

  @Auth('ADMIN')
  @Post('')
  async create(@Body() createDealDto: CreateDealDto) {
    return this.dealsService.create(createDealDto)
  }

  @Auth('ADMIN')
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDealDto: UpdateDealDto) {
    return this.dealsService.update(id, updateDealDto)
  }

  @Auth('ADMIN')
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.dealsService.delete(id)
  }

  @Auth('USER')
  @Post(':id/usage')
  async use(@GetCurrentId() accountId: string, @Param('id') id: string) {
    return this.dealsService.use(accountId, id)
  }
}
