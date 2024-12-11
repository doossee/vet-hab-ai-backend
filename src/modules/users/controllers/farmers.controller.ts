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
import { FarmersService } from '../services';
import { CreateFarmerDto, UpdateFarmerDto } from '../dto';
import { FarmerQueryParamsDto } from '../dto/query-params.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PaginatedFarmersEntity } from '../entities/paginated-response.entity';
import { FarmerEntity } from '../entities/farmer.entity';
import { UserEntity } from '../entities/user.entity';

@ApiTags('farmers')
@Controller('farmers')
export class FarmersController {
  constructor(private readonly farmersService: FarmersService) {}

  @ApiCreatedResponse({ type: FarmerEntity })
  @Post()
  async create(@Body() data: CreateFarmerDto) {
    return new FarmerEntity(await this.farmersService.create(data));
  }

  @ApiOkResponse({ type: PaginatedFarmersEntity })
  @Get()
  async findAll(@Query() params: FarmerQueryParamsDto) {
    const { data, meta } = await this.farmersService.findAll(params);
    const transdormedData = data.map((farmer) => new FarmerEntity(farmer));
    return { data: transdormedData, meta };
  }

  @ApiOkResponse({ type: FarmerEntity })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new FarmerEntity(await this.farmersService.findOne(id));
  }

  @ApiOkResponse({ type: FarmerEntity })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateFarmerDto,
  ) {
    return new FarmerEntity(await this.farmersService.update(id, data));
  }

  @ApiOkResponse({ type: UserEntity })
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new UserEntity(await this.farmersService.remove(id));
  }
}
