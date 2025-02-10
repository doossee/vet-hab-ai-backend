import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateGeneralBloodTestDto, GeneralBloodTestQueryParamsDto, UpdateGeneralBloodTestDto } from '../dto';
import { PaginateFunction, paginator } from 'src/common/pagination';
import { Prisma } from '@prisma/client';

const paginate: PaginateFunction = paginator({ perPage: 30 });

@Injectable()
export class GeneralBloodTestsService {
  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreateGeneralBloodTestDto) {
    return await this.prisma.generalBloodTest.create({
      data,
      include: {
        animal: true,
      }
    });
  }

  async findAll(params: GeneralBloodTestQueryParamsDto) {
    const {
      page,
      perPage,
      animalId,
      createdDate,
      byId,
      byCreatedDate,
    } = params;

    const where: Prisma.GeneralBloodTestWhereInput = {
      ...(animalId && { animalId: animalId }),
      ...(createdDate && {
        createdAt: {
          gte: new Date(createdDate.setHours(0, 0, 0, 0)),
          lt: new Date(createdDate.setHours(23, 59, 59, 999)),
        },
      }),
    };

    const orderBy: Prisma.GeneralBloodTestOrderByWithRelationInput = {
      ...(byId && { id: byId }),
      ...(byCreatedDate && { createdAt: byCreatedDate }),
    };

    const include: any = {
      animal: true,
    };

    return await paginate(
      this.prisma.generalBloodTest,
      { where, orderBy, include },
      { page, perPage }
    );
  }

  async findOne(id: number) {
    return await this.prisma.generalBloodTest.findUniqueOrThrow({
      where: { id },
      include: {
        animal: true,
      }
    });
  }

  async update(id: number, data: UpdateGeneralBloodTestDto) {
    await this.prisma.generalBloodTest.findUniqueOrThrow({ where: { id } });
    return await this.prisma.generalBloodTest.update({
      where: { id },
      data,
      include: {
        animal: true,
      }
    });
  }

  async remove(id: number) {
    await this.prisma.generalBloodTest.findUniqueOrThrow({ where: { id } });
    return await this.prisma.generalBloodTest.delete({
      where: { id },
      include: {
        animal: true,
      }
    });
  }
}
