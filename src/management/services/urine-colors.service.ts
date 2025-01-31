import { Injectable } from '@nestjs/common';
import {
  CreateUrineColorDto,
  UpdateUrineColorDto,
  UrineColorQueryParamsDto,
} from '../dto';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';
import { PaginateFunction, paginator } from 'src/common/pagination';

const paginate: PaginateFunction = paginator({ perPage: 10 });

@Injectable()
export class UrineColorsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateUrineColorDto) {
    return await this.prisma.urineColor.create({ data });
  }

  async findAll(params: UrineColorQueryParamsDto) {
    const { search, page, perPage, byId } = params;

    const where: Prisma.UrineColorWhereInput = {
      ...(search && { name: { contains: search, mode: 'insensitive' } }),
    };

    const orderBy: Prisma.UrineColorOrderByWithRelationInput = {
      ...(byId && { id: byId }),
    };

    const include: any = {};

    return paginate(
      this.prisma.urineColor,
      { where, orderBy, include },
      { page, perPage },
    );
  }

  async findOne(id: number) {
    return await this.prisma.urineColor.findUniqueOrThrow({
      where: { id },
      include: {},
    });
  }

  async update(id: number, data: UpdateUrineColorDto) {
    await this.prisma.urineColor.findUniqueOrThrow({ where: { id } });
    return await this.prisma.urineColor.update({
      where: { id },
      data,
      include: {},
    });
  }

  async remove(id: number) {
    await this.prisma.urineColor.findUniqueOrThrow({ where: { id } });
    return await this.prisma.urineColor.delete({ where: { id } });
  }
}
