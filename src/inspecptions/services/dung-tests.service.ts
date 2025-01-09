import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateDungTestDto, DungTestQueryParamsDto, UpdateDungTestDto } from '../dto';
import { PaginateFunction, paginator } from 'src/common/pagination';
import { Prisma } from '@prisma/client';

const paginate: PaginateFunction = paginator({ perPage: 30 });

@Injectable()
export class DungTestsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateDungTestDto) {
    return await this.prisma.dungTest.create({
      data,
      include: {
        animal: true,
        disease: true,
        color: true
      }
    });
  }

  async findAll(params: DungTestQueryParamsDto) {
    const {
      page,
      perPage,
      byId,
    } = params;

    const where: Prisma.DungTestWhereInput = {
      
    };

    const orderBy: Prisma.DungTestOrderByWithRelationInput = {
      ...(byId && { id: byId }),
    };

    const include: any = {
      animal: true,
      disease: true,
      color: true
    }

    return await paginate(
      this.prisma.dungTest,
      { where, orderBy, include },
      { page, perPage }
    );
  }

  async findOne(id: number) {
    return await this.prisma.dungTest.findUniqueOrThrow({ 
      where: { id },
      include: {
        animal: true,
        disease: true,
        color: true
      }
    });
  }

  async update(id: number, data: UpdateDungTestDto) {
    await this.prisma.dungTest.findUniqueOrThrow({ where: { id } });
    return await this.prisma.dungTest.update({ 
      where: { id },
      data,
      include: {
        animal: true,
        disease: true,
        color: true
      }
    });
  }

  async remove(id: number) {
    await this.prisma.dungTest.findUniqueOrThrow({ where: { id } });
    return await this.prisma.dungTest.delete({ 
      where: { id },
      include: {
        animal: true,
        disease: true,
        color: true
      }
    });
  }
}
