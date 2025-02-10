import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateUrineTestDto, UpdateUrineTestDto, UrineTestQueryParamsDto } from '../dto';
import { PaginateFunction, paginator } from 'src/common/pagination';
import { Prisma } from '@prisma/client';

const paginate: PaginateFunction = paginator({ perPage: 30 });

@Injectable()
export class UrineTestsService {
  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreateUrineTestDto) {
    return await this.prisma.urineTest.create({
      data,
      include: {
        animal: true,
        color: true,
        disease: true
      }
    });

  }

  async findAll(params: UrineTestQueryParamsDto) {
    const {
      page,
      perPage,
      animalId,
      createdDate,
      byId,
      byCreatedDate,
    } = params;

    const where: Prisma.UrineTestWhereInput = {
      ...(animalId && { animalId: animalId }),
      ...(createdDate && {
        createdAt: {
          gte: new Date(createdDate.setHours(0, 0, 0, 0)),
          lt: new Date(createdDate.setHours(23, 59, 59, 999)),
        },
      }),
    };

    const orderBy: Prisma.UrineTestOrderByWithRelationInput = {
      ...(byId && { id: byId }),
      ...(byCreatedDate && { createdAt: byCreatedDate }),
    };

    const include: any = {
      animal: true,
      color: true,
      disease: true,
    }
    return await paginate(
      this.prisma.urineTest,
      { where, orderBy, include },
      { page, perPage }
    );
  }

  async findOne(id: number) {
    return await this.prisma.urineTest.findUniqueOrThrow({
      where: { id },
      include: {
        animal: true,
        color: true,
        disease: true,
      }
    });
  }

  async update(id: number, data: UpdateUrineTestDto) {
    await this.prisma.urineTest.findUniqueOrThrow({ where: { id } });
    return await this.prisma.urineTest.update({
      where: { id },
      data,
      include: {
        animal: true,
        color: true,
        disease: true,
      }
    });
  }

  async remove(id: number) {
    await this.prisma.urineTest.findUniqueOrThrow({ where: { id } });
    return await this.prisma.urineTest.delete({
      where: { id },
      include: {
        animal: true,
        color: true,
        disease: true,
      }
    });
  }
}
