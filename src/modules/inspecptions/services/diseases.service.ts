import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateDiseaseDto, DiseaseQueryParamsDto, UpdateDiseaseDto } from '../dto';
import { PaginateFunction, paginator } from 'src/common/pagination';
import { Prisma } from '@prisma/client';

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

  async findAll(params: DiseaseQueryParamsDto) {
    const {
      page,
      perPage,
      byId,
    } = params;

    const where: Prisma.DiseaseWhereInput = {
      
    };

    const orderBy: Prisma.DiseaseOrderByWithRelationInput = {
      ...(byId && { id: byId }),
    };

    const include: any = {
      animal: true,
      type: true,
    }

    return await paginate(
      this.prisma.disease,
      { where, orderBy, include },
      { page, perPage }
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
