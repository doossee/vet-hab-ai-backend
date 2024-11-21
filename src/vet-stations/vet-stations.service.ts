import { Injectable } from '@nestjs/common';
import { CreateVetStationDto } from './dto/create-vet-station.dto';
import { UpdateVetStationDto } from './dto/update-vet-station.dto';

@Injectable()
export class VetStationsService {
  create(createVetStationDto: CreateVetStationDto) {
    return 'This action adds a new vetStation';
  }

  findAll() {
    return `This action returns all vetStations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vetStation`;
  }

  update(id: number, updateVetStationDto: UpdateVetStationDto) {
    return `This action updates a #${id} vetStation`;
  }

  remove(id: number) {
    return `This action removes a #${id} vetStation`;
  }
}
