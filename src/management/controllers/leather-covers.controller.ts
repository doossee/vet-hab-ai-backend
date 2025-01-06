import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { LeatherCoversService } from '../services';
import {
  CreateLeatherCoverDto,
  UpdateLeatherCoverDto,
  LeatherCoverQueryParamsDto,
} from '../dto';
import { LeatherCoverEntity, PaginatedLeatherCoversEntity } from '../entities';

@ApiTags('leather-covers')
@Controller('leather-covers')
export class LeatherCoversController {
  constructor(private readonly leatherCoversService: LeatherCoversService) {}

  @ApiCreatedResponse({ type: LeatherCoverEntity })
  @Post()
  async create(@Body() data: CreateLeatherCoverDto) {
    return new LeatherCoverEntity(await this.leatherCoversService.create(data));
  }

  @ApiOkResponse({ type: PaginatedLeatherCoversEntity })
  @Get()
  async findAll(@Query() params: LeatherCoverQueryParamsDto) {
    const { data, meta } = await this.leatherCoversService.findAll(params);
    const transdormedData = data.map(
      (leatherCover) => new LeatherCoverEntity(leatherCover),
    );
    return { data: transdormedData, meta };
  }

  @ApiOkResponse({ type: LeatherCoverEntity })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new LeatherCoverEntity(await this.leatherCoversService.findOne(id));
  }

  @ApiOkResponse({ type: LeatherCoverEntity })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateLeatherCoverDto,
  ) {
    return new LeatherCoverEntity(await this.leatherCoversService.update(id, data));
  }

  @ApiOkResponse({ type: LeatherCoverEntity })
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new LeatherCoverEntity(await this.leatherCoversService.remove(id));
  }
}
