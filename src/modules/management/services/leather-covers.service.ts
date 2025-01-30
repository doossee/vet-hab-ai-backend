import { Injectable } from '@nestjs/common';
import {
  CreateLeatherCoverDto,
  UpdateLeatherCoverDto,
  LeatherCoverQueryParamsDto,
} from '../dto';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';
import { PaginateFunction, paginator } from 'src/common/pagination';

const paginate: PaginateFunction = paginator({ perPage: 10 });

@Injectable()
export class LeatherCoversService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateLeatherCoverDto) {
    return await this.prisma.leatherCover.create({ data });
  }

  async findAll(params: LeatherCoverQueryParamsDto) {
    const { search, page, perPage, byId } = params;

    const where: Prisma.LeatherCoverWhereInput = {
      ...(search && { name: { contains: search, mode: 'insensitive' } }),
    };

    const orderBy: Prisma.LeatherCoverOrderByWithRelationInput = {
      ...(byId && { id: byId }),
    };

    const include: any = {};

    return await paginate(
      this.prisma.leatherCover,
      { where, orderBy, include },
      { page, perPage },
    );
  }

  async findOne(id: number) {
    return await this.prisma.leatherCover.findUniqueOrThrow({
      where: { id },
      include: {},
    });
  }

  async update(id: number, data: UpdateLeatherCoverDto) {
    await this.prisma.leatherCover.findUniqueOrThrow({ where: { id } });
    return await this.prisma.leatherCover.update({
      where: { id },
      data,
      include: {},
    });
  }

  async remove(id: number) {
    await this.prisma.leatherCover.findUniqueOrThrow({ where: { id } });
    return await this.prisma.leatherCover.delete({ where: { id } });
  }
}
