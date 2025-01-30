import { Injectable } from '@nestjs/common';
import { CreateRegionDto, UpdateRegionDto, RegionQueryParamsDto } from '../dto';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';
import { PaginateFunction, paginator } from 'src/common/pagination';

const paginate: PaginateFunction = paginator({ perPage: 10 });

@Injectable()
export class RegionsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateRegionDto) {
    return await this.prisma.region.create({ data });
  }

  async findAll(params: RegionQueryParamsDto) {
    const { search, page, perPage, byId } = params;

    const where: Prisma.RegionWhereInput = {
      ...(search && { name: { contains: search, mode: 'insensitive' } }),
    };

    const orderBy: Prisma.RegionOrderByWithRelationInput = {
      ...(byId && { id: byId }),
    };

    const include: any = {
      districts: {
        select: {
          id: true,
          name: true,
        },
      },
    };

    return paginate(
      this.prisma.region,
      { where, orderBy, include },
      { page, perPage },
    );
  }

  async findOne(id: number) {
    return await this.prisma.region.findUniqueOrThrow({
      where: { id },
      include: {
        districts: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async update(id: number, data: UpdateRegionDto) {
    await this.prisma.region.findUniqueOrThrow({ where: { id } });
    return await this.prisma.region.update({
      where: { id },
      data,
      include: {
        districts: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async remove(id: number) {
    await this.prisma.region.findUniqueOrThrow({ where: { id } });
    return await this.prisma.region.delete({ where: { id } });
  }
}
