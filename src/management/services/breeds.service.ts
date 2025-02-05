import { Injectable } from '@nestjs/common';
import { CreateBreedDto, UpdateBreedDto, BreedQueryParamsDto } from '../dto';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';
import { PaginateFunction, paginator } from 'src/common/pagination';

const paginate: PaginateFunction = paginator({ perPage: 10 });

@Injectable()
export class BreedsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateBreedDto) {
    return await this.prisma.breed.create({ data });
  }

  async findAll(params: BreedQueryParamsDto) {
    const { search, page, perPage, byId } = params;

    const where: Prisma.BreedWhereInput = {
      ...(search && { name: { contains: search, mode: 'insensitive' } }),
    };

    const orderBy: Prisma.BreedOrderByWithRelationInput = {
      ...(byId && { id: byId }),
    };

    const include: any = {};

    return await paginate(
      this.prisma.breed,
      { where, orderBy, include },
      { page, perPage },
    );
  }

  async findOne(id: number) {
    return await this.prisma.breed.findUniqueOrThrow({
      where: { id },
      include: {},
    });
  }

  async update(id: number, data: UpdateBreedDto) {
    await this.prisma.breed.findUniqueOrThrow({ where: { id } });
    return await this.prisma.breed.update({
      where: { id },
      data,
      include: {},
    });
  }

  async remove(id: number) {
    await this.prisma.breed.findUniqueOrThrow({ where: { id } });
    return await this.prisma.breed.delete({ where: { id } });
  }
}
