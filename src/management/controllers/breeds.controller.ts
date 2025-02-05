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
import { BreedsService } from '../services';
import { CreateBreedDto, UpdateBreedDto, BreedQueryParamsDto } from '../dto';
import { BreedEntity, PaginatedBreedsEntity } from '../entities';

@ApiTags('breeds')
@Controller('breeds')
export class BreedsController {
  constructor(private readonly breedsService: BreedsService) {}

  @ApiCreatedResponse({ type: BreedEntity })
  @Post()
  async create(@Body() data: CreateBreedDto) {
    return new BreedEntity(await this.breedsService.create(data));
  }

  @ApiOkResponse({ type: PaginatedBreedsEntity })
  @Get()
  async findAll(@Query() params: BreedQueryParamsDto) {
    const { data, meta } = await this.breedsService.findAll(params);
    const transdormedData = data.map((breed) => new BreedEntity(breed));
    return { data: transdormedData, meta };
  }

  @ApiOkResponse({ type: BreedEntity })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new BreedEntity(await this.breedsService.findOne(id));
  }

  @ApiOkResponse({ type: BreedEntity })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateBreedDto,
  ) {
    return new BreedEntity(await this.breedsService.update(id, data));
  }

  @ApiOkResponse({ type: BreedEntity })
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new BreedEntity(await this.breedsService.remove(id));
  }
}
