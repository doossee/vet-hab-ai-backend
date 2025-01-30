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
import { VetStationsService } from '../services';
import {
  CreateVetStationDto,
  UpdateVetStationDto,
  VetStationQueryParamsDto,
} from '../dto';
import { VetStationEntity, PaginatedVetStationsEntity } from '../entities';

@ApiTags('vet-stations')
@Controller('vet-stations')
export class VetStationsController {
  constructor(private readonly vetStationsService: VetStationsService) {}

  @ApiCreatedResponse({ type: VetStationEntity })
  @Post()
  async create(@Body() data: CreateVetStationDto) {
    return new VetStationEntity(await this.vetStationsService.create(data));
  }

  @ApiOkResponse({ type: PaginatedVetStationsEntity })
  @Get()
  async findAll(@Query() params: VetStationQueryParamsDto) {
    const { data, meta } = await this.vetStationsService.findAll(params);
    const transdormedData = data.map(
      (vetStation) => new VetStationEntity(vetStation),
    );
    return { data: transdormedData, meta };
  }

  @ApiOkResponse({ type: VetStationEntity })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new VetStationEntity(await this.vetStationsService.findOne(id));
  }

  @ApiOkResponse({ type: VetStationEntity })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateVetStationDto,
  ) {
    return new VetStationEntity(await this.vetStationsService.update(id, data));
  }

  @ApiOkResponse({ type: VetStationEntity })
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new VetStationEntity(await this.vetStationsService.remove(id));
  }
}
