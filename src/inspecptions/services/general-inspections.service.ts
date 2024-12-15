import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateGeneralInspectionDto, UpdateGeneralInspectionDto } from '../dto';
import { PaginateFunction, paginator } from 'src/common/pagination';

const paginate: PaginateFunction = paginator({ perPage: 30 });

@Injectable()
export class GeneralInspectionsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateGeneralInspectionDto) {
    return await this.prisma.generalInspection.create({ data });
  }

  async findAll() {
    return await paginate(this.prisma.generalInspection);
  }

  async findOne(id: number) {
    return await this.prisma.generalInspection.findUniqueOrThrow({
      where: { id },
    });
  }

  async update(id: number, data: UpdateGeneralInspectionDto) {
    await this.prisma.generalInspection.findUniqueOrThrow({ where: { id } });
    return await this.prisma.generalInspection.update({ where: { id }, data });
  }

  async remove(id: number) {
    await this.prisma.generalInspection.findUniqueOrThrow({ where: { id } });
    return await this.prisma.generalInspection.delete({ where: { id } });
  }
}
