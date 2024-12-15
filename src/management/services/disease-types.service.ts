import { Injectable } from '@nestjs/common';
import {
  CreateDiseaseTypeDto,
  UpdateDiseaseTypeDto,
  DiseaseTypeQueryParamsDto,
} from '../dto';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';
import { PaginateFunction, paginator } from 'src/common/pagination';

const paginate: PaginateFunction = paginator({ perPage: 10 });

@Injectable()
export class DiseaseTypesService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateDiseaseTypeDto) {
    return await this.prisma.diseaseType.create({ data });
  }

  async findAll(params: DiseaseTypeQueryParamsDto) {
    const { search, page, perPage, byId } = params;

    const where: Prisma.DiseaseTypeWhereInput = {
      ...(search && { name: { contains: search, mode: 'insensitive' } }),
    };

    const orderBy: Prisma.DiseaseTypeOrderByWithRelationInput = {
      ...(byId && { id: byId }),
    };

    const include: any = {
      district: {
        inclucde: {},
      },
    };

    return paginate(
      this.prisma.veterinarian,
      { where, orderBy, include },
      { page, perPage },
    );
  }

  async findOne(id: number) {
    return await this.prisma.diseaseType.findUniqueOrThrow({
      where: { id },
      include: {},
    });
  }

  async update(id: number, data: UpdateDiseaseTypeDto) {
    await this.prisma.diseaseType.findUniqueOrThrow({ where: { id } });
    return await this.prisma.diseaseType.update({
      where: { id },
      data,
      include: {},
    });
  }

  async remove(id: number) {
    await this.prisma.diseaseType.findUniqueOrThrow({ where: { id } });
    return await this.prisma.diseaseType.delete({ where: { id } });
  }
}
