import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import {
  CreateRumenTestDto,
  RumenTestQueryParamsDto,
  UpdateRumenTestDto,
} from '../dto';
import { PaginateFunction, paginator } from 'src/common/pagination';
import { Prisma } from '@prisma/client';

const paginate: PaginateFunction = paginator({ perPage: 30 });

@Injectable()
export class RumenTestsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateRumenTestDto) {
    return await this.prisma.rumenTest.create({
      data: {
        ...data,
        date: new Date(data.date),
      },
      include: {
        animal: true,
        disease: true,
      },
    });
  }

  async findAll(params: RumenTestQueryParamsDto) {
    const { page, perPage, animalId, createdDate, byId, byCreatedDate } =
      params;

    const where: Prisma.RumenTestWhereInput = {
      ...(animalId && { animalId: animalId }),
      ...(createdDate && {
        createdAt: {
          gte: new Date(createdDate.setHours(0, 0, 0, 0)),
          lt: new Date(createdDate.setHours(23, 59, 59, 999)),
        },
      }),
    };

    const orderBy: Prisma.RumenTestOrderByWithRelationInput = {
      ...(byId && { id: byId }),
      ...(byCreatedDate && { createdAt: byCreatedDate }),
    };

    const include: any = {
      animal: true,
      disease: true,
    };

    return await paginate(
      this.prisma.rumenTest,
      { where, orderBy, include },
      { page, perPage },
    );
  }

  async findOne(id: number) {
    return await this.prisma.rumenTest.findUniqueOrThrow({
      where: { id },
      include: {
        animal: true,
        disease: true,
      },
    });
  }

  async update(id: number, data: UpdateRumenTestDto) {
    await this.prisma.rumenTest.findUniqueOrThrow({ where: { id } });
    return await this.prisma.rumenTest.update({
      where: { id },
      data: {
        ...data,
        ...(data.date && { date: new Date(data.date) }),
      },
      include: {
        animal: true,
        disease: true,
      },
    });
  }

  async remove(id: number) {
    await this.prisma.rumenTest.findUniqueOrThrow({ where: { id } });
    return await this.prisma.rumenTest.delete({
      where: { id },
      include: {
        animal: true,
        disease: true,
      },
    });
  }
}
