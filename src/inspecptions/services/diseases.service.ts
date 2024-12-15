import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateDiseaseDto, UpdateDiseaseDto } from '../dto';
import { PaginateFunction, paginator } from 'src/common/pagination';

const paginate: PaginateFunction = paginator({ perPage: 30 });

@Injectable()
export class DiseasesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateDiseaseDto) {
    return await this.prisma.disease.create({ data });
  }

  async findAll() {
    return await paginate(this.prisma.disease);
  }

  async findOne(id: number) {
    return await this.prisma.disease.findUniqueOrThrow({ where: { id } });
  }

  async update(id: number, data: UpdateDiseaseDto) {
    await this.prisma.disease.findUniqueOrThrow({ where: { id } });
    return await this.prisma.disease.update({ where: { id }, data });
  }

  async remove(id: number) {
    await this.prisma.disease.findUniqueOrThrow({ where: { id } });
    return await this.prisma.disease.delete({ where: { id } });
  }
}
