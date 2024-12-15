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
} from '@nestjs/common';
import { GeneralBloodTestsService } from '../services';
import { CreateGeneralBloodTestDto, UpdateGeneralBloodTestDto } from '../dto';
import {
  GeneralBloodTestEntity,
  PaginatedGeneralBloodTestEntity,
} from '../entities';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('general-blood-tests')
@Controller('general-blood-tests')
export class GeneralBloodTestController {
  constructor(
    private readonly generalBloodTestsService: GeneralBloodTestsService,
  ) {}

  @ApiCreatedResponse({ type: GeneralBloodTestEntity })
  @Post()
  async create(@Body() data: CreateGeneralBloodTestDto) {
    return new GeneralBloodTestEntity(
      await this.generalBloodTestsService.create(data),
    );
  }

  @ApiOkResponse({ type: PaginatedGeneralBloodTestEntity })
  @Get()
  async findAll() {
    const { data, meta } = await this.generalBloodTestsService.findAll();
    const transformedData = data.map(
      (generalBloodTest) => new GeneralBloodTestEntity(generalBloodTest),
    );
    return { data: transformedData, meta };
  }

  @ApiOkResponse({ type: GeneralBloodTestEntity })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new GeneralBloodTestEntity(
      await this.generalBloodTestsService.findOne(id),
    );
  }

  @ApiOkResponse({ type: GeneralBloodTestEntity })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateGeneralBloodTestDto,
  ) {
    return new GeneralBloodTestEntity(
      await this.generalBloodTestsService.update(id, data),
    );
  }

  @ApiOkResponse({ type: GeneralBloodTestEntity })
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new GeneralBloodTestEntity(
      await this.generalBloodTestsService.remove(id),
    );
  }
}
