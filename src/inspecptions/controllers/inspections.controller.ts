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
import { InspectionsService } from '../services';
import { InspectionEntity, PaginatedInspectionEntity } from '../entities';
import { CreateInspectionDto, InspectionQueryParamsDto, UpdateInspectionDto } from '../dto';

@ApiTags('inspections')
@Controller('inspections')
export class InspectionsController {
  constructor(private readonly inspectionsService: InspectionsService) {}

  @ApiCreatedResponse({ type: InspectionEntity })
  @Post()
  async create(@Body() data: CreateInspectionDto) {
    return new InspectionEntity(await this.inspectionsService.create(data));
  }

  @ApiOkResponse({ type: PaginatedInspectionEntity })
  @Get()
  async findAll(@Query() params: InspectionQueryParamsDto) {
    const { data, meta } = await this.inspectionsService.findAll(params);
    const transformedData = data.map(
      (inspection) => new InspectionEntity(inspection),
    );
    return { data: transformedData, meta };
  }

  @ApiOkResponse({ type: InspectionEntity })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new InspectionEntity(await this.inspectionsService.findOne(id));
  }

  @ApiOkResponse({ type: InspectionEntity })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateInspectionDto,
  ) {
    return new InspectionEntity(await this.inspectionsService.update(id, data));
  }

  @ApiOkResponse({ type: InspectionEntity })
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new InspectionEntity(await this.inspectionsService.remove(id));
  }
}
