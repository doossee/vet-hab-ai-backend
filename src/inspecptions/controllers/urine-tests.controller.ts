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
import { UrineTestsService } from '../services';
import { UrineTestEntity, PaginatedUrineTestEntity } from '../entities';
import { CreateUrineTestDto, UpdateUrineTestDto, UrineTestQueryParamsDto } from '../dto';

@ApiTags('urine-tests')
@Controller('urine-tests')
export class UrineTestsController {
  constructor(private readonly urineTestsService: UrineTestsService) {}

  @ApiCreatedResponse({ type: UrineTestEntity })
  @Post()
  async create(@Body() data: CreateUrineTestDto) {
    return new UrineTestEntity(await this.urineTestsService.create(data));
  }

  @ApiOkResponse({ type: PaginatedUrineTestEntity })
  @Get()
  async findAll(@Query() params: UrineTestQueryParamsDto) {
    const { data, meta } = await this.urineTestsService.findAll(params);
    const transformedData = data.map(
      (urineTest) => new UrineTestEntity(urineTest),
    );
    return { data: transformedData, meta };
  }

  @ApiOkResponse({ type: UrineTestEntity })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new UrineTestEntity(await this.urineTestsService.findOne(id));
  }

  @ApiOkResponse({ type: UrineTestEntity })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateUrineTestDto,
  ) {
    return new UrineTestEntity(await this.urineTestsService.update(id, data));
  }

  @ApiOkResponse({ type: UrineTestEntity })
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new UrineTestEntity(await this.urineTestsService.remove(id));
  }
}
