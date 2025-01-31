import { Injectable } from '@nestjs/common';
import { CreateAnimalDto, UpdateAnimalDto, AnimalQueryParamsDto } from '../dto';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';
import { PaginateFunction, paginator } from 'src/common/pagination';

const paginate: PaginateFunction = paginator({ perPage: 10 });

@Injectable()
export class AnimalsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateAnimalDto) {
    return await this.prisma.animal.create({ 
      data,
      include: {
        type: {
          select: {
            name: true,
          },
        },
        color: {
          select: {
            name: true,
            hex: true,
          },
        },
      },
    });
  }

  async findAll(params: AnimalQueryParamsDto) {
    const {
      search,
      page,
      perPage,
      farmerId,
      typeId,
      gender,
      breed,
      birthDate,
      colorId,
      createdDate,
      byId,
      byFarmedId,
      byTypeId,
      byGender,
      byBreed,
      byBirthDate,
      byColorId,
      byCreatedDate,
    } = params;

    const where: Prisma.AnimalWhereInput = {
      ...(search && {
        animal: {
          OR: [
            { idCode: { contains: search, mode: 'insensitive' } },
            { name: { contains: search, mode: 'insensitive' } },
          ],
        },
      }),
      ...(farmerId && { farmerId: farmerId }),
      ...(typeId && { typeId: typeId }),
      ...(gender && { gender: gender }),
      ...(breed && { breed: breed }),
      ...(birthDate && { birthDate: birthDate }),
      ...(colorId && { colorId: colorId }),
      ...(createdDate && {
        createdAt: {
          gte: new Date(createdDate.setHours(0, 0, 0, 0)),
          lt: new Date(createdDate.setHours(23, 59, 59, 999)),
        },
      }),
    };

    const orderBy: Prisma.AnimalOrderByWithRelationInput = {
      ...(byId && { id: byId }),
      ...(byFarmedId && { farmerId: byFarmedId }),
      ...(byTypeId && { typeId: byTypeId }),
      ...(byGender && { gender: byGender }),
      ...(byBreed && { breed: byBreed }),
      ...(byBirthDate && { birthDate: byBirthDate }),
      ...(byColorId && { colorId: byColorId }),
      ...(byCreatedDate && { createdAt: byCreatedDate }),
    };

    const include: any = {
      type: {
        select: {
          name: true,
        },
      },
      color: {
        select: {
          name: true,
          hex: true,
        },
      },
    };

    return paginate(
      this.prisma.animal,
      { where, orderBy, include },
      { page, perPage },
    );
  }

  async findOne(id: number) {
    return await this.prisma.animal.findUniqueOrThrow({
      where: { id },
      include: {
        type: {
          select: {
            name: true,
          },
        },
        color: {
          select: {
            name: true,
            hex: true,
          },
        },
      },
    });
  }

  async update(id: number, data: UpdateAnimalDto) {
    await this.prisma.animal.findUniqueOrThrow({ where: { id } });
    return await this.prisma.animal.update({
      where: { id },
      data,
      include: {
        type: {
          select: {
            name: true,
          },
        },
        color: {
          select: {
            name: true,
            hex: true,
          },
        },
      },
    });
  }

  async remove(id: number) {
    await this.prisma.animal.findUniqueOrThrow({ where: { id } });
    return await this.prisma.animal.delete({ 
      where: { id },
      include: {
        type: {
          select: {
            name: true,
          },
        },
        color: {
          select: {
            name: true,
            hex: true,
          },
        },
      },
    });
  }
}
