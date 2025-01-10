import { Injectable } from '@nestjs/common';
import {
  CreateVaccineDto,
  UpdateVaccineDto,
  VaccineQueryParamsDto,
} from '../dto';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';
import { PaginateFunction, paginator } from 'src/common/pagination';

const paginate: PaginateFunction = paginator({ perPage: 10 });

@Injectable()
export class VaccinesService {
  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreateVaccineDto) {
    return await this.prisma.vaccine.create({
      data,
      include: {
        animal: true,
        type: {
          select: {
            name: true,
          },
        },
      }
    });
  }

  async findAll(params: VaccineQueryParamsDto) {
    const {
      search,
      page,
      perPage,
      date,
      typeId,
      animalId,
      createdDate,
      byId,
      byDate,
      byTypeId,
      byAnimalId,
      byCreatedDate,
    } = params;

    const where: Prisma.VaccineWhereInput = {
      ...(search && {
        vaccine: {
          OR: [
            { idCode: { contains: search, mode: 'insensitive' } },
            { name: { contains: search, mode: 'insensitive' } },
          ],
        },
      }),
      ...(date && { date: date }),
      ...(typeId && { typeId: typeId }),
      ...(animalId && { animalId: animalId }),
      ...(createdDate && {
        createdAt: {
          gte: new Date(createdDate.setHours(0, 0, 0, 0)),
          lt: new Date(createdDate.setHours(23, 59, 59, 999)),
        },
      }),
    };

    const orderBy: Prisma.VaccineOrderByWithRelationInput = {
      ...(byId && { id: byId }),
      ...(byDate && { date: byDate }),
      ...(byTypeId && { typeId: byTypeId }),
      ...(byAnimalId && { animalId: byAnimalId }),
      ...(byCreatedDate && { createdAt: byCreatedDate }),
    };

    const include: any = {
      animal: true,
      type: {
        select: {
          name: true,
        },
      },
    };

    return paginate(
      this.prisma.vaccine,
      { where, orderBy, include },
      { page, perPage },
    );
  }

  async findOne(id: number) {
    return await this.prisma.vaccine.findUniqueOrThrow({
      where: { id },
      include: {
        animal: true,
        type: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async update(id: number, data: UpdateVaccineDto) {
    await this.prisma.vaccine.findUniqueOrThrow({ where: { id } });
    return await this.prisma.vaccine.update({
      where: { id },
      data,
      include: {
        animal: true,
        type: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async remove(id: number) {
    await this.prisma.vaccine.findUniqueOrThrow({ where: { id } });
    return await this.prisma.vaccine.delete({
      where: { id },
      include: {
        animal: true,
        type: {
          select: {
            name: true,
          }
        }
      }
    });
  }
}
