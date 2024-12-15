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
import { DiseaseTypesService } from '../services';
import {
  CreateDiseaseTypeDto,
  UpdateDiseaseTypeDto,
  DiseaseTypeQueryParamsDto,
} from '../dto';
import { DiseaseTypeEntity, PaginatedDiseaseTypesEntity } from '../entities';

@ApiTags('disease-types')
@Controller('disease-types')
export class DiseaseTypesController {
  constructor(private readonly diseaseTypesService: DiseaseTypesService) {}

  @ApiCreatedResponse({ type: DiseaseTypeEntity })
  @Post()
  async create(@Body() data: CreateDiseaseTypeDto) {
    return new DiseaseTypeEntity(await this.diseaseTypesService.create(data));
  }

  @ApiOkResponse({ type: PaginatedDiseaseTypesEntity })
  @Get()
  async findAll(@Query() params: DiseaseTypeQueryParamsDto) {
    const { data, meta } = await this.diseaseTypesService.findAll(params);
    const transdormedData = data.map(
      (diseaseType) => new DiseaseTypeEntity(diseaseType),
    );
    return { data: transdormedData, meta };
  }

  @ApiOkResponse({ type: DiseaseTypeEntity })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new DiseaseTypeEntity(await this.diseaseTypesService.findOne(id));
  }

  @ApiOkResponse({ type: DiseaseTypeEntity })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateDiseaseTypeDto,
  ) {
    return new DiseaseTypeEntity(
      await this.diseaseTypesService.update(id, data),
    );
  }

  @ApiOkResponse({ type: DiseaseTypeEntity })
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new DiseaseTypeEntity(await this.diseaseTypesService.remove(id));
  }
}
