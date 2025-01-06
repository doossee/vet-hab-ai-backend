import { Injectable } from '@nestjs/common';
import {
  CreateEyelidDto,
  UpdateEyelidDto,
  EyelidQueryParamsDto,
} from '../dto';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';
import { PaginateFunction, paginator } from 'src/common/pagination';

const paginate: PaginateFunction = paginator({ perPage: 10 });

@Injectable()
export class EyelidsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateEyelidDto) {
    return await this.prisma.eyelid.create({ data });
  }

  async findAll(params: EyelidQueryParamsDto) {
    const { search, page, perPage, byId } = params;

    const where: Prisma.EyelidWhereInput = {
      ...(search && { name: { contains: search, mode: 'insensitive' } }),
    };

    const orderBy: Prisma.EyelidOrderByWithRelationInput = {
      ...(byId && { id: byId }),
    };

    const include: any = {};

    return await paginate(
      this.prisma.eyelid,
      { where, orderBy, include },
      { page, perPage },
    );
  }

  async findOne(id: number) {
    return await this.prisma.eyelid.findUniqueOrThrow({
      where: { id },
      include: {},
    });
  }

  async update(id: number, data: UpdateEyelidDto) {
    await this.prisma.eyelid.findUniqueOrThrow({ where: { id } });
    return await this.prisma.eyelid.update({
      where: { id },
      data,
      include: {},
    });
  }

  async remove(id: number) {
    await this.prisma.eyelid.findUniqueOrThrow({ where: { id } });
    return await this.prisma.eyelid.delete({ where: { id } });
  }
}
