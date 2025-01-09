import {
  Body,
  Controller,
  Delete,
  Get,
  Injectable,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { GeneralInspectionsService } from '../services';
import { CreateGeneralInspectionDto, GeneralInspectionQueryParamsDto, UpdateGeneralInspectionDto } from '../dto';
import {
  GeneralInspectionEntity,
  PaginatedGeneralInspectionEntity,
} from '../entities';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('general-inspections')
@Controller('general-inspections')
export class GeneralInspectionController {
  constructor(
    private readonly generalInspectionsService: GeneralInspectionsService,
  ) {}

  @ApiCreatedResponse({ type: GeneralInspectionEntity })
  @Post()
  async create(@Body() data: CreateGeneralInspectionDto) {
    return new GeneralInspectionEntity(
      await this.generalInspectionsService.create(data),
    );
  }

  @ApiOkResponse({ type: PaginatedGeneralInspectionEntity })
  @Get()
  async findAll(@Query() params: GeneralInspectionQueryParamsDto) {
    const { data, meta } = await this.generalInspectionsService.findAll(params);
    const transformedData = data.map(
      (generalInspection) => new GeneralInspectionEntity(generalInspection),
    );
    return { data: transformedData, meta };
  }

  @ApiOkResponse({ type: GeneralInspectionEntity })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new GeneralInspectionEntity(
      await this.generalInspectionsService.findOne(id),
    );
  }

  @ApiOkResponse({ type: GeneralInspectionEntity })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateGeneralInspectionDto,
  ) {
    return new GeneralInspectionEntity(
      await this.generalInspectionsService.update(id, data),
    );
  }

  @ApiOkResponse({ type: GeneralInspectionEntity })
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new GeneralInspectionEntity(
      await this.generalInspectionsService.remove(id),
    );
  }
}
