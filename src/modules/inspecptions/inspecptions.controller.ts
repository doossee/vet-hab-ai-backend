import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InspecptionsService } from './inspecptions.service';
import { CreateInspecptionDto } from './dto/create-inspecption.dto';
import { UpdateInspecptionDto } from './dto/update-inspecption.dto';

@Controller('inspecptions')
export class InspecptionsController {
  constructor(private readonly inspecptionsService: InspecptionsService) {}

  @Post()
  create(@Body() createInspecptionDto: CreateInspecptionDto) {
    return this.inspecptionsService.create(createInspecptionDto);
  }

  @Get()
  findAll() {
    return this.inspecptionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inspecptionsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInspecptionDto: UpdateInspecptionDto,
  ) {
    return this.inspecptionsService.update(+id, updateInspecptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inspecptionsService.remove(+id);
  }
}
