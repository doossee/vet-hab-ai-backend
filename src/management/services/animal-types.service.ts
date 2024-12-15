import { Injectable } from '@nestjs/common';
import {
  CreateAnimalTypeDto,
  UpdateAnimalTypeDto,
  AnimalTypeQueryParamsDto,
} from '../dto';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';
import { PaginateFunction, paginator } from 'src/common/pagination';

const paginate: PaginateFunction = paginator({ perPage: 10 });

@Injectable()
export class AnimalTypesService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateAnimalTypeDto) {
    return await this.prisma.animalType.create({ data });
  }

  async findAll(params: AnimalTypeQueryParamsDto) {
    const { search, page, perPage, byId } = params;

    const where: Prisma.AnimalTypeWhereInput = {
      ...(search && { name: { contains: search, mode: 'insensitive' } }),
    };

    const orderBy: Prisma.AnimalTypeOrderByWithRelationInput = {
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
    return await this.prisma.animalType.findUniqueOrThrow({
      where: { id },
      include: {},
    });
  }

  async update(id: number, data: UpdateAnimalTypeDto) {
    await this.prisma.animalType.findUniqueOrThrow({ where: { id } });
    return await this.prisma.animalType.update({
      where: { id },
      data,
      include: {},
    });
  }

  async remove(id: number) {
    await this.prisma.animalType.findUniqueOrThrow({ where: { id } });
    return await this.prisma.animalType.delete({ where: { id } });
  }
}
