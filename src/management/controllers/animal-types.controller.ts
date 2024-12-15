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
import { AnimalTypesService } from '../services';
import {
  CreateAnimalTypeDto,
  UpdateAnimalTypeDto,
  AnimalTypeQueryParamsDto,
} from '../dto';
import { AnimalTypeEntity, PaginatedAnimalTypesEntity } from '../entities';

@ApiTags('animal-types')
@Controller('animal-types')
export class AnimalTypesController {
  constructor(private readonly animalTypesService: AnimalTypesService) {}

  @ApiCreatedResponse({ type: AnimalTypeEntity })
  @Post()
  async create(@Body() data: CreateAnimalTypeDto) {
    return new AnimalTypeEntity(await this.animalTypesService.create(data));
  }

  @ApiOkResponse({ type: PaginatedAnimalTypesEntity })
  @Get()
  async findAll(@Query() params: AnimalTypeQueryParamsDto) {
    const { data, meta } = await this.animalTypesService.findAll(params);
    const transdormedData = data.map(
      (animalType) => new AnimalTypeEntity(animalType),
    );
    return { data: transdormedData, meta };
  }

  @ApiOkResponse({ type: AnimalTypeEntity })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new AnimalTypeEntity(await this.animalTypesService.findOne(id));
  }

  @ApiOkResponse({ type: AnimalTypeEntity })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateAnimalTypeDto,
  ) {
    return new AnimalTypeEntity(await this.animalTypesService.update(id, data));
  }

  @ApiOkResponse({ type: AnimalTypeEntity })
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new AnimalTypeEntity(await this.animalTypesService.remove(id));
  }
}
