import { Injectable } from '@nestjs/common';
import {
  CreateDungColorDto,
  UpdateDungColorDto,
  DungColorQueryParamsDto,
} from '../dto';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';
import { PaginateFunction, paginator } from 'src/common/pagination';

const paginate: PaginateFunction = paginator({ perPage: 10 });

@Injectable()
export class DungColorsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateDungColorDto) {
    return await this.prisma.dungColor.create({ data });
  }

  async findAll(params: DungColorQueryParamsDto) {
    const { search, page, perPage, byId } = params;

    const where: Prisma.DungColorWhereInput = {
      ...(search && { name: { contains: search, mode: 'insensitive' } }),
    };

    const orderBy: Prisma.DungColorOrderByWithRelationInput = {
      ...(byId && { id: byId }),
    };

    const include: any = {
      
    };

    return paginate(
      this.prisma.dungColor,
      { where, orderBy, include },
      { page, perPage },
    );
  }

  async findOne(id: number) {
    return await this.prisma.dungColor.findUniqueOrThrow({
      where: { id },
      include: {},
    });
  }

  async update(id: number, data: UpdateDungColorDto) {
    await this.prisma.dungColor.findUniqueOrThrow({ where: { id } });
    return await this.prisma.dungColor.update({
      where: { id },
      data,
      include: {},
    });
  }

  async remove(id: number) {
    await this.prisma.dungColor.findUniqueOrThrow({ where: { id } });
    return await this.prisma.dungColor.delete({ where: { id } });
  }
}
