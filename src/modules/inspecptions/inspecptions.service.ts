import { Injectable } from '@nestjs/common';
import { CreateInspecptionDto } from './dto/create-inspecption.dto';
import { UpdateInspecptionDto } from './dto/update-inspecption.dto';

@Injectable()
export class InspecptionsService {
  create(createInspecptionDto: CreateInspecptionDto) {
    return 'This action adds a new inspecption';
  }

  findAll() {
    return `This action returns all inspecptions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inspecption`;
  }

  update(id: number, updateInspecptionDto: UpdateInspecptionDto) {
    return `This action updates a #${id} inspecption`;
  }

  remove(id: number) {
    return `This action removes a #${id} inspecption`;
  }
}
