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
import { BloodSerumTestsService } from '../services';
import {
  BloodSerumTestEntity,
  PaginatedBloodSerumTestEntity,
} from '../entities';
import { CreateBloodSerumTestDto, UpdateBloodSerumTestDto } from '../dto';

@ApiTags('blood-serum-tests')
@Controller('blood-serum-tests')
export class BloodSerumTestsController {
  constructor(
    private readonly bloodSerumTestsService: BloodSerumTestsService,
  ) {}

  @ApiCreatedResponse({ type: BloodSerumTestEntity })
  @Post()
  async create(@Body() data: CreateBloodSerumTestDto) {
    return new BloodSerumTestEntity(
      await this.bloodSerumTestsService.create(data),
    );
  }

  @ApiOkResponse({ type: PaginatedBloodSerumTestEntity })
  @Get()
  async findAll() {
    const { data, meta } = await this.bloodSerumTestsService.findAll();
    const transformedData = data.map(
      (bloodSerumTest) => new BloodSerumTestEntity(bloodSerumTest),
    );
    return { data: transformedData, meta };
  }

  @ApiOkResponse({ type: BloodSerumTestEntity })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new BloodSerumTestEntity(
      await this.bloodSerumTestsService.findOne(id),
    );
  }

  @ApiOkResponse({ type: BloodSerumTestEntity })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateBloodSerumTestDto,
  ) {
    return new BloodSerumTestEntity(
      await this.bloodSerumTestsService.update(id, data),
    );
  }

  @ApiOkResponse({ type: BloodSerumTestEntity })
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new BloodSerumTestEntity(
      await this.bloodSerumTestsService.remove(id),
    );
  }
}
