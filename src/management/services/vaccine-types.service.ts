import { Injectable } from '@nestjs/common';
import {
  CreateVaccineTypeDto,
  UpdateVaccineTypeDto,
  VaccineTypeQueryParamsDto,
} from '../dto';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';
import { PaginateFunction, paginator } from 'src/common/pagination';

const paginate: PaginateFunction = paginator({ perPage: 10 });

@Injectable()
export class VaccineTypesService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateVaccineTypeDto) {
    return await this.prisma.vaccineType.create({ data });
  }

  async findAll(params: VaccineTypeQueryParamsDto) {
    const { search, page, perPage, byId } = params;

    const where: Prisma.VaccineTypeWhereInput = {
      ...(search && { name: { contains: search, mode: 'insensitive' } }),
    };

    const orderBy: Prisma.VaccineTypeOrderByWithRelationInput = {
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
    return await this.prisma.vaccineType.findUniqueOrThrow({
      where: { id },
      include: {},
    });
  }

  async update(id: number, data: UpdateVaccineTypeDto) {
    await this.prisma.vaccineType.findUniqueOrThrow({ where: { id } });
    return await this.prisma.vaccineType.update({
      where: { id },
      data,
      include: {},
    });
  }

  async remove(id: number) {
    await this.prisma.vaccineType.findUniqueOrThrow({ where: { id } });
    return await this.prisma.vaccineType.delete({ where: { id } });
  }
}
