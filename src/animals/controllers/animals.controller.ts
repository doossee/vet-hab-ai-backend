import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AnimalEntity } from '../entities';
import { CreateAnimalDto, UpdateAnimalDto, AnimalQueryParamsDto } from '../dto';
import { AnimalsService } from '../services';

@ApiTags('animals')
@Controller('animals')
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) {}

  @ApiCreatedResponse({ type: AnimalEntity })
  @Post()
  async create(@Body() createAnimalDto: CreateAnimalDto) {
    return new AnimalEntity(await this.animalsService.create(createAnimalDto));
  }

  @ApiOkResponse({ type: AnimalEntity })
  @Get()
  async findAll(@Query() params: AnimalQueryParamsDto) {
    const { data, meta } = await this.animalsService.findAll(params);
    const transdormedData = data.map((animal) => new AnimalEntity(animal));
    return { data: transdormedData, meta };
  }

  @ApiOkResponse({ type: AnimalEntity })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new AnimalEntity(await this.animalsService.findOne(id));
  }

  @ApiOkResponse({ type: AnimalEntity })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateAnimalDto,
  ) {
    return new AnimalEntity(await this.animalsService.update(id, data));
  }

  @ApiOkResponse({ type: AnimalEntity })
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new AnimalEntity(await this.animalsService.remove(id));
  }
}
