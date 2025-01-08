import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateDiseaseDto, UpdateDiseaseDto } from '../dto';
import { PaginateFunction, paginator } from 'src/common/pagination';

const paginate: PaginateFunction = paginator({ perPage: 30 });

@Injectable()
export class DiseasesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateDiseaseDto) {
    return await this.prisma.disease.create({ 
      data,
      include: {
        animal: true,
        type: true
      }
    });
  }

  async findAll() {
    const include: any = {
      animal: true,
      type: true,
    }

    return await paginate(
      this.prisma.disease,
      include
    );
  }

  async findOne(id: number) {
    return await this.prisma.disease.findUniqueOrThrow({ 
      where: { id }, 
      include: {
        animal: true,
        type: true
      }
    });
  }

  async update(id: number, data: UpdateDiseaseDto) {
    await this.prisma.disease.findUniqueOrThrow({ where: { id } });
    return await this.prisma.disease.update({ 
      where: { id },
      data,
      include: {
        animal: true,
        type: true,
      }
    });
  }

  async remove(id: number) {
    await this.prisma.disease.findUniqueOrThrow({ where: { id } });
    return await this.prisma.disease.delete({ 
      where: { id },
      include: {
        animal: true,
        type: true,
      }
    });
  }
}
