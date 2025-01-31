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
import { VaccineEntity } from '../entities';
import {
  CreateVaccineDto,
  UpdateVaccineDto,
  VaccineQueryParamsDto,
} from '../dto';
import { VaccinesService } from '../services';

@ApiTags('vaccines')
@Controller('vaccines')
export class VaccinesController {
  constructor(private readonly vaccinesService: VaccinesService) {}

  @ApiCreatedResponse({ type: VaccineEntity })
  @Post()
  async create(@Body() createVaccineDto: CreateVaccineDto) {
    return new VaccineEntity(
      await this.vaccinesService.create(createVaccineDto),
    );
  }

  @ApiOkResponse({ type: VaccineEntity })
  @Get()
  async findAll(@Query() params: VaccineQueryParamsDto) {
    const { data, meta } = await this.vaccinesService.findAll(params);
    const transdormedData = data.map((vaccine) => new VaccineEntity(vaccine));
    return { data: transdormedData, meta };
  }

  @ApiOkResponse({ type: VaccineEntity })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new VaccineEntity(await this.vaccinesService.findOne(id));
  }

  @ApiOkResponse({ type: VaccineEntity })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateVaccineDto,
  ) {
    return new VaccineEntity(await this.vaccinesService.update(id, data));
  }

  @ApiOkResponse({ type: VaccineEntity })
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new VaccineEntity(await this.vaccinesService.remove(id));
  }
}
