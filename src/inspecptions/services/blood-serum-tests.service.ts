import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { BloodSerumTestQueryParamsDto, CreateBloodSerumTestDto, UpdateBloodSerumTestDto } from '../dto';
import { PaginateFunction, paginator } from 'src/common/pagination';
import { Prisma } from '@prisma/client';

const paginate: PaginateFunction = paginator({ perPage: 30 });

@Injectable()
export class BloodSerumTestsService {
  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreateBloodSerumTestDto) {
    return await this.prisma.bloodSerumTest.create({
      data,
      include: {
        animal: true,
      }
    });
  }

  async findAll(params: BloodSerumTestQueryParamsDto) {
    const {
      page,
      perPage,
      animalId,
      createdDate,
      byId,
      byCreatedDate,
    } = params;

    const where: Prisma.BloodSerumTestWhereInput = {
      ...(animalId && { animalId: animalId }),
      ...(createdDate && {
        createdAt: {
          gte: new Date(createdDate.setHours(0, 0, 0, 0)),
          lt: new Date(createdDate.setHours(23, 59, 59, 999)),
        },
      }),
    };

    const orderBy: Prisma.BloodSerumTestOrderByWithRelationInput = {
      ...(byId && { id: byId }),
      ...(byCreatedDate && { createdAt: byCreatedDate }),
    };

    const include: any = {
      animal: true,
    }
    return await paginate(
      this.prisma.bloodSerumTest,
      { where, orderBy, include },
      { page, perPage },
    );
  }

  async findOne(id: number) {
    return await this.prisma.bloodSerumTest.findUniqueOrThrow({
      where: { id },
      include: {
        animal: true,
      }
    });
  }

  async update(id: number, data: UpdateBloodSerumTestDto) {
    await this.prisma.bloodSerumTest.findUniqueOrThrow({ where: { id } });
    return await this.prisma.bloodSerumTest.update({
      where: { id },
      data,
      include: {
        animal: true,
      }
    });
  }

  async remove(id: number) {
    await this.prisma.bloodSerumTest.findUniqueOrThrow({ where: { id } });
    return await this.prisma.bloodSerumTest.delete({
      where: { id },
      include: {
        animal: true,
      }
    });
  }
}
