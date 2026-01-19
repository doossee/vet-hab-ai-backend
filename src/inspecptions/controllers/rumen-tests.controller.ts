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
import { RumenTestsService } from '../services';
import { RumenTestEntity, PaginatedRumenTestEntity } from '../entities';
import {
  CreateRumenTestDto,
  RumenTestQueryParamsDto,
  UpdateRumenTestDto,
} from '../dto';

@ApiTags('rumen-tests')
@Controller('rumen-tests')
export class RumenTestsController {
  constructor(private readonly rumenTestsService: RumenTestsService) {}

  @ApiCreatedResponse({ type: RumenTestEntity })
  @Post()
  async create(@Body() data: CreateRumenTestDto) {
    return new RumenTestEntity(await this.rumenTestsService.create(data));
  }

  @ApiOkResponse({ type: PaginatedRumenTestEntity })
  @Get()
  async findAll(@Query() params: RumenTestQueryParamsDto) {
    const { data, meta } = await this.rumenTestsService.findAll(params);
    const transformedData = data.map(
      (rumenTest) => new RumenTestEntity(rumenTest),
    );
    return { data: transformedData, meta };
  }

  @ApiOkResponse({ type: RumenTestEntity })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new RumenTestEntity(await this.rumenTestsService.findOne(id));
  }

  @ApiOkResponse({ type: RumenTestEntity })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateRumenTestDto,
  ) {
    return new RumenTestEntity(await this.rumenTestsService.update(id, data));
  }

  @ApiOkResponse({ type: RumenTestEntity })
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new RumenTestEntity(await this.rumenTestsService.remove(id));
  }
}
