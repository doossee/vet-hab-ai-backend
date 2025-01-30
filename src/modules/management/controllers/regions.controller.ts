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
import { RegionsService } from '../services';
import { CreateRegionDto, UpdateRegionDto, RegionQueryParamsDto } from '../dto';
import { RegionEntity, PaginatedRegionsEntity } from '../entities';

@ApiTags('regions')
@Controller('regions')
export class RegionsController {
  constructor(private readonly regionsService: RegionsService) {}

  @ApiCreatedResponse({ type: RegionEntity })
  @Post()
  async create(@Body() data: CreateRegionDto) {
    return new RegionEntity(await this.regionsService.create(data));
  }

  @ApiOkResponse({ type: PaginatedRegionsEntity })
  @Get()
  async findAll(@Query() params: RegionQueryParamsDto) {
    const { data, meta } = await this.regionsService.findAll(params);
    const transdormedData = data.map((region) => new RegionEntity(region));
    return { data: transdormedData, meta };
  }

  @ApiOkResponse({ type: RegionEntity })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new RegionEntity(await this.regionsService.findOne(id));
  }

  @ApiOkResponse({ type: RegionEntity })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateRegionDto,
  ) {
    return new RegionEntity(await this.regionsService.update(id, data));
  }

  @ApiOkResponse({ type: RegionEntity })
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new RegionEntity(await this.regionsService.remove(id));
  }
}
