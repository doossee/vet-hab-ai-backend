import { Controller, Post, Body, Get, Query, Param, ParseIntPipe, Patch, Delete } from "@nestjs/common";
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from "@nestjs/swagger";
import { UserEntity } from "../users/entity";
import { CreateFarmerDto, FarmerQueryParamsDto, UpdateFarmerDto } from "./dto";
import { FarmerEntity, PaginatedFarmersEntity } from "./entity";
import { FarmersService } from "./farmers.service";

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
