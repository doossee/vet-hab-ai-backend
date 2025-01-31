import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { DiseasesService } from '../services';
import { DiseaseEntity, PaginatedDiseaseEntity } from '../entities';
import { CreateDiseaseDto, DiseaseQueryParamsDto, UpdateDiseaseDto } from '../dto';

@ApiTags('diseases')
@Controller('diseases')
export class DiseasesController {
  constructor(private readonly diseasesService: DiseasesService) {}

  @ApiCreatedResponse({ type: DiseaseEntity })
  @Post()
  async create(@Body() data: CreateDiseaseDto) {
    return new DiseaseEntity(await this.diseasesService.create(data));
  }

  @ApiOkResponse({ type: PaginatedDiseaseEntity })
  @Get()
  async findAll(@Query() params: DiseaseQueryParamsDto) {
    const { data, meta } = await this.diseasesService.findAll(params);
    const transformedData = data.map((disease) => new DiseaseEntity(disease));
    return { data: transformedData, meta };
  }

  @ApiOkResponse({ type: DiseaseEntity })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new DiseaseEntity(await this.diseasesService.findOne(id));
  }

  @ApiOkResponse({ type: DiseaseEntity })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateDiseaseDto,
  ) {
    return new DiseaseEntity(await this.diseasesService.update(id, data));
  }

  @ApiOkResponse({ type: DiseaseEntity })
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new DiseaseEntity(await this.diseasesService.remove(id));
  }
}
