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
import { DungColorsService } from '../services';
import {
  CreateDungColorDto,
  UpdateDungColorDto,
  DungColorQueryParamsDto,
} from '../dto';
import { DungColorEntity, PaginatedDungColorsEntity } from '../entities';

@ApiTags('dung-colors')
@Controller('dung-colors')
export class DungColorsController {
  constructor(private readonly dungColorsService: DungColorsService) {}

  @ApiCreatedResponse({ type: DungColorEntity })
  @Post()
  async create(@Body() data: CreateDungColorDto) {
    return new DungColorEntity(await this.dungColorsService.create(data));
  }

  @ApiOkResponse({ type: PaginatedDungColorsEntity })
  @Get()
  async findAll(@Query() params: DungColorQueryParamsDto) {
    const { data, meta } = await this.dungColorsService.findAll(params);
    const transdormedData = data.map(
      (dungColor) => new DungColorEntity(dungColor),
    );
    return { data: transdormedData, meta };
  }

  @ApiOkResponse({ type: DungColorEntity })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new DungColorEntity(await this.dungColorsService.findOne(id));
  }

  @ApiOkResponse({ type: DungColorEntity })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateDungColorDto,
  ) {
    return new DungColorEntity(await this.dungColorsService.update(id, data));
  }

  @ApiOkResponse({ type: DungColorEntity })
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new DungColorEntity(await this.dungColorsService.remove(id));
  }
}
