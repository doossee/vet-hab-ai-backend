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
import { VaccineTypesService } from '../services';
import {
  CreateVaccineTypeDto,
  UpdateVaccineTypeDto,
  VaccineTypeQueryParamsDto,
} from '../dto';
import { VaccineTypeEntity, PaginatedVaccineTypesEntity } from '../entities';

@ApiTags('vaccine-types')
@Controller('vaccine-types')
export class VaccineTypesController {
  constructor(private readonly vaccineTypesService: VaccineTypesService) {}

  @ApiCreatedResponse({ type: VaccineTypeEntity })
  @Post()
  async create(@Body() data: CreateVaccineTypeDto) {
    return new VaccineTypeEntity(await this.vaccineTypesService.create(data));
  }

  @ApiOkResponse({ type: PaginatedVaccineTypesEntity })
  @Get()
  async findAll(@Query() params: VaccineTypeQueryParamsDto) {
    const { data, meta } = await this.vaccineTypesService.findAll(params);
    const transdormedData = data.map(
      (vaccineType) => new VaccineTypeEntity(vaccineType),
    );
    return { data: transdormedData, meta };
  }

  @ApiOkResponse({ type: VaccineTypeEntity })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new VaccineTypeEntity(await this.vaccineTypesService.findOne(id));
  }

  @ApiOkResponse({ type: VaccineTypeEntity })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateVaccineTypeDto,
  ) {
    return new VaccineTypeEntity(
      await this.vaccineTypesService.update(id, data),
    );
  }

  @ApiOkResponse({ type: VaccineTypeEntity })
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new VaccineTypeEntity(await this.vaccineTypesService.remove(id));
  }
}
