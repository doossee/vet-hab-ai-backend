import { Injectable } from '@nestjs/common';
import {
  CreateVetStationDto,
  UpdateVetStationDto,
  VetStationQueryParamsDto,
} from '../dto';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';
import { PaginateFunction, paginator } from 'src/common/pagination';

const paginate: PaginateFunction = paginator({ perPage: 10 });

@Injectable()
export class VetStationsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateVetStationDto) {
    return await this.prisma.vetStation.create({ 
      data,
      include: {
        district: true,
      }
    });
  }

  async findAll(params: VetStationQueryParamsDto) {
    const { search, page, perPage, byId } = params;

    const where: Prisma.VetStationWhereInput = {
      ...(search && { name: { contains: search, mode: 'insensitive' } }),
    };

    const orderBy: Prisma.VetStationOrderByWithRelationInput = {
      ...(byId && { id: byId }),
    };

    const include: any = {
      district: true,
    };

    return paginate(
      this.prisma.vetStation,
      { where, orderBy, include },
      { page, perPage },
    );
  }

  async findOne(id: number) {
    return await this.prisma.vetStation.findUniqueOrThrow({
      where: { id },
      include: {
        district: true,
      },
    });
  }

  async update(id: number, data: UpdateVetStationDto) {
    await this.prisma.vetStation.findUniqueOrThrow({ where: { id } });
    return await this.prisma.vetStation.update({
      where: { id },
      data,
      include: {
        district: true,
      },
    });
  }

  async remove(id: number) {
    await this.prisma.vetStation.findUniqueOrThrow({ where: { id } });
    return await this.prisma.vetStation.delete({ 
      where: { id },
      include: {
        district: true,
      }
    });
  }
}
