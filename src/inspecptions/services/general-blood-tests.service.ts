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
      byId,
    } = params;

    const where: Prisma.GeneralBloodTestWhereInput = {
      
    };

    const orderBy: Prisma.GeneralBloodTestOrderByWithRelationInput = {
      ...(byId && { id: byId }),
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
