import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateInspectionDto, InspectionQueryParamsDto, UpdateInspectionDto } from '../dto';
import { PaginateFunction, paginator } from 'src/common/pagination';
import { Prisma } from '@prisma/client';

const paginate: PaginateFunction = paginator({ perPage: 30 });

@Injectable()
export class InspectionsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateInspectionDto) {
    return await this.prisma.inspection.create({ 
      data,
      include: {
        animal: true
      }
    });
  }

  async findAll(params: InspectionQueryParamsDto) {
    const {
      page,
      perPage,
      byId,
    } = params;

    const where: Prisma.InspectionWhereInput = {
      
    };

    const orderBy: Prisma.InspectionOrderByWithRelationInput = {
      ...(byId && { id: byId }),
    };

    const include: any = {
      animal: true,     
    };

    return await paginate(
      this.prisma.inspection,
      { where, orderBy, include },
      { page, perPage }
    );
  }

  async findOne(id: number) {
    return await this.prisma.inspection.findUniqueOrThrow({ 
      where: { id },
      include: {
        animal: true
      }
    });
  }

  async update(id: number, data: UpdateInspectionDto) {
    await this.prisma.inspection.findUniqueOrThrow({ where: { id } });
    return await this.prisma.inspection.update({ 
      where: { id }, 
      data,
      include: {
        animal: true
      }
    });
  }

  async remove(id: number) {
    await this.prisma.inspection.findUniqueOrThrow({ where: { id } });
    return await this.prisma.inspection.delete({ 
      where: { id },
      include: {
        animal: true
      }
    });
  }
}
