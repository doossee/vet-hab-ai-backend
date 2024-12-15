import { Injectable } from '@nestjs/common';
import {
  CreateDistrictDto,
  UpdateDistrictDto,
  DistrictQueryParamsDto,
} from '../dto';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';
import { PaginateFunction, paginator } from 'src/common/pagination';

const paginate: PaginateFunction = paginator({ perPage: 10 });

@Injectable()
export class DistrictsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateDistrictDto) {
    return await this.prisma.district.create({ data });
  }

  async findAll(params: DistrictQueryParamsDto) {
    const { search, page, perPage, byId } = params;

    const where: Prisma.DistrictWhereInput = {
      ...(search && { name: { contains: search, mode: 'insensitive' } }),
    };

    const orderBy: Prisma.DistrictOrderByWithRelationInput = {
      ...(byId && { id: byId }),
    };

    const include: any = {
      region: {
        select: {
          id: true,
          name: true,
        }
      }
    };

    return paginate(
      this.prisma.district,
      { where, orderBy, include },
      { page, perPage },
    );
  }

  async findOne(id: number) {
    return await this.prisma.district.findUniqueOrThrow({
      where: { id },
      include: {
        region: {
          select: {
            id: true,
            name: true,
          }
        }
      },
    });
  }

  async update(id: number, data: UpdateDistrictDto) {
    await this.prisma.district.findUniqueOrThrow({ where: { id } });
    return await this.prisma.district.update({
      where: { id },
      data,
      include: {
        region: {
          select: {
            id: true,
            name: true,
          }
        }
      },
    });
  }

  async remove(id: number) {
    await this.prisma.district.findUniqueOrThrow({ where: { id } });
    return await this.prisma.district.delete({ where: { id } });
  }
}
