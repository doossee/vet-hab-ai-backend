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
import { UrineColorsService } from '../services';
import {
  CreateUrineColorDto,
  UpdateUrineColorDto,
  UrineColorQueryParamsDto,
} from '../dto';
import { UrineColorEntity, PaginatedUrineColorsEntity } from '../entities';

@ApiTags('urine-colors')
@Controller('urine-colors')
export class UrineColorsController {
  constructor(private readonly urineColorsService: UrineColorsService) {}

  @ApiCreatedResponse({ type: UrineColorEntity })
  @Post()
  async create(@Body() data: CreateUrineColorDto) {
    return new UrineColorEntity(await this.urineColorsService.create(data));
  }

  @ApiOkResponse({ type: PaginatedUrineColorsEntity })
  @Get()
  async findAll(@Query() params: UrineColorQueryParamsDto) {
    const { data, meta } = await this.urineColorsService.findAll(params);
    const transdormedData = data.map(
      (urineColor) => new UrineColorEntity(urineColor),
    );
    return { data: transdormedData, meta };
  }

  @ApiOkResponse({ type: UrineColorEntity })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new UrineColorEntity(await this.urineColorsService.findOne(id));
  }

  @ApiOkResponse({ type: UrineColorEntity })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateUrineColorDto,
  ) {
    return new UrineColorEntity(await this.urineColorsService.update(id, data));
  }

  @ApiOkResponse({ type: UrineColorEntity })
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new UrineColorEntity(await this.urineColorsService.remove(id));
  }
}
