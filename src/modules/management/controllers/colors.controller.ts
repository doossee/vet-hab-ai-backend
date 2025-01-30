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
import { ColorsService } from '../services';
import { CreateColorDto, UpdateColorDto, ColorQueryParamsDto } from '../dto';
import { ColorEntity, PaginatedColorsEntity } from '../entities';

@ApiTags('colors')
@Controller('colors')
export class ColorsController {
  constructor(private readonly colorsService: ColorsService) {}

  @ApiCreatedResponse({ type: ColorEntity })
  @Post()
  async create(@Body() data: CreateColorDto) {
    return new ColorEntity(await this.colorsService.create(data));
  }

  @ApiOkResponse({ type: PaginatedColorsEntity })
  @Get()
  async findAll(@Query() params: ColorQueryParamsDto) {
    const { data, meta } = await this.colorsService.findAll(params);
    const transdormedData = data.map((color) => new ColorEntity(color));
    return { data: transdormedData, meta };
  }

  @ApiOkResponse({ type: ColorEntity })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new ColorEntity(await this.colorsService.findOne(id));
  }

  @ApiOkResponse({ type: ColorEntity })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateColorDto,
  ) {
    return new ColorEntity(await this.colorsService.update(id, data));
  }

  @ApiOkResponse({ type: ColorEntity })
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new ColorEntity(await this.colorsService.remove(id));
  }
}
