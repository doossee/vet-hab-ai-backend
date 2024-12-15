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
import { DistrictsService } from '../services';
import {
  CreateDistrictDto,
  UpdateDistrictDto,
  DistrictQueryParamsDto,
} from '../dto';
import { DistrictEntity, PaginatedDistrictsEntity } from '../entities';

@ApiTags('districts')
@Controller('districts')
export class DistrictsController {
  constructor(private readonly districtsService: DistrictsService) {}

  @ApiCreatedResponse({ type: DistrictEntity })
  @Post()
  async create(@Body() data: CreateDistrictDto) {
    return new DistrictEntity(await this.districtsService.create(data));
  }

  @ApiOkResponse({ type: PaginatedDistrictsEntity })
  @Get()
  async findAll(@Query() params: DistrictQueryParamsDto) {
    const { data, meta } = await this.districtsService.findAll(params);
    const transdormedData = data.map(
      (district) => new DistrictEntity(district),
    );
    return { data: transdormedData, meta };
  }

  @ApiOkResponse({ type: DistrictEntity })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new DistrictEntity(await this.districtsService.findOne(id));
  }

  @ApiOkResponse({ type: DistrictEntity })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateDistrictDto,
  ) {
    return new DistrictEntity(await this.districtsService.update(id, data));
  }

  @ApiOkResponse({ type: DistrictEntity })
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new DistrictEntity(await this.districtsService.remove(id));
  }
}
