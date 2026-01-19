import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { RumenTestsService } from '../services';
import { RumenTestEntity, PaginatedRumenTestEntity } from '../entities';
import { CreateRumenTestDto, UpdateRumenTestDto } from '../dto';
import { RumenTestQueryParamsDto } from '../dto/query-params.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('Rumen Tests')
@UseGuards(JwtAuthGuard)
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
    return {
      data: data.map((rumenTest) => new RumenTestEntity(rumenTest)),
      meta,
    };
  }

  @ApiOkResponse({ type: RumenTestEntity })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new RumenTestEntity(await this.rumenTestsService.findOne(+id));
  }

  @ApiOkResponse({ type: RumenTestEntity })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateRumenTestDto) {
    return new RumenTestEntity(await this.rumenTestsService.update(+id, data));
  }

  @ApiOkResponse({ type: RumenTestEntity })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new RumenTestEntity(await this.rumenTestsService.remove(+id));
  }
}
