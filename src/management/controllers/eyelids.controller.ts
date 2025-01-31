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
import { EyelidsService } from '../services';
import {
  CreateEyelidDto,
  UpdateEyelidDto,
  EyelidQueryParamsDto,
} from '../dto';
import { EyelidEntity, PaginatedEyelidsEntity } from '../entities';

@ApiTags('eyelids')
@Controller('eyelids')
export class EyelidsController {
  constructor(private readonly eyelidsService: EyelidsService) {}

  @ApiCreatedResponse({ type: EyelidEntity })
  @Post()
  async create(@Body() data: CreateEyelidDto) {
    return new EyelidEntity(await this.eyelidsService.create(data));
  }

  @ApiOkResponse({ type: PaginatedEyelidsEntity })
  @Get()
  async findAll(@Query() params: EyelidQueryParamsDto) {
    const { data, meta } = await this.eyelidsService.findAll(params);
    const transdormedData = data.map(
      (eyelid) => new EyelidEntity(eyelid),
    );
    return { data: transdormedData, meta };
  }

  @ApiOkResponse({ type: EyelidEntity })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new EyelidEntity(await this.eyelidsService.findOne(id));
  }

  @ApiOkResponse({ type: EyelidEntity })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateEyelidDto,
  ) {
    return new EyelidEntity(await this.eyelidsService.update(id, data));
  }

  @ApiOkResponse({ type: EyelidEntity })
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new EyelidEntity(await this.eyelidsService.remove(id));
  }
}
