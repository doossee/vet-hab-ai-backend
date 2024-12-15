import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { DungTestsService } from '../services';
import { DungTestEntity, PaginatedDungTestEntity } from '../entities';
import { CreateDungTestDto, UpdateDungTestDto } from '../dto';

@ApiTags('dung-tests')
@Controller('dung-tests')
export class DungTestsController {
  constructor(private readonly dungTestsService: DungTestsService) {}

  @ApiCreatedResponse({ type: DungTestEntity })
  @Post()
  async create(@Body() data: CreateDungTestDto) {
    return new DungTestEntity(await this.dungTestsService.create(data));
  }

  @ApiOkResponse({ type: PaginatedDungTestEntity })
  @Get()
  async findAll() {
    const { data, meta } = await this.dungTestsService.findAll();
    const transformedData = data.map(
      (dungTest) => new DungTestEntity(dungTest),
    );
    return { data: transformedData, meta };
  }

  @ApiOkResponse({ type: DungTestEntity })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new DungTestEntity(await this.dungTestsService.findOne(id));
  }

  @ApiOkResponse({ type: DungTestEntity })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateDungTestDto,
  ) {
    return new DungTestEntity(await this.dungTestsService.update(id, data));
  }

  @ApiOkResponse({ type: DungTestEntity })
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new DungTestEntity(await this.dungTestsService.remove(id));
  }
}
