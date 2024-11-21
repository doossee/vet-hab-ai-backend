import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VetStationsService } from './vet-stations.service';
import { CreateVetStationDto } from './dto/create-vet-station.dto';
import { UpdateVetStationDto } from './dto/update-vet-station.dto';

@Controller('vet-stations')
export class VetStationsController {
  constructor(private readonly vetStationsService: VetStationsService) {}

  @Post()
  create(@Body() createVetStationDto: CreateVetStationDto) {
    return this.vetStationsService.create(createVetStationDto);
  }

  @Get()
  findAll() {
    return this.vetStationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vetStationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVetStationDto: UpdateVetStationDto) {
    return this.vetStationsService.update(+id, updateVetStationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vetStationsService.remove(+id);
  }
}
