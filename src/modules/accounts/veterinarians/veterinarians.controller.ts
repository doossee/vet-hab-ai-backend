import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  Param,
  ParseIntPipe,
  Patch,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { CreateUserDto, UpdateUserDto } from '../users/dto';
import { UserEntity } from '../users/entity';
import { VeterinarianQueryParamsDto } from './dto';
import { VeterinarianEntity, PaginatedVeterinariansEntity } from './entity';
import { VeterinariansService } from './veterinarians.service';

@ApiTags('veterinarians')
@Controller('veterinarians')
export class VeterinariansController {
  constructor(private readonly veterinariansService: VeterinariansService) {}

  @ApiCreatedResponse({ type: VeterinarianEntity })
  @Post()
  async create(@Body() data: CreateUserDto) {
    return new VeterinarianEntity(await this.veterinariansService.create(data));
  }

  @ApiOkResponse({ type: PaginatedVeterinariansEntity })
  @Get()
  async findAll(@Query() params: VeterinarianQueryParamsDto) {
    const { data, meta } = await this.veterinariansService.findAll(params);
    const transdormedData = data.map(
      (veterinarian) => new VeterinarianEntity(veterinarian),
    );
    return { data: transdormedData, meta };
  }

  @ApiOkResponse({ type: VeterinarianEntity })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new VeterinarianEntity(await this.veterinariansService.findOne(id));
  }

  @ApiOkResponse({ type: VeterinarianEntity })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateUserDto,
  ) {
    return new VeterinarianEntity(
      await this.veterinariansService.update(id, data),
    );
  }

  @ApiOkResponse({ type: UserEntity })
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new UserEntity(await this.veterinariansService.remove(id));
  }
}
