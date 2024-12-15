import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateInspectionDto, UpdateInspectionDto } from '../dto';
import { PaginateFunction, paginator } from 'src/common/pagination';

const paginate: PaginateFunction = paginator({ perPage: 30 });

@Injectable()
export class InspectionsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateInspectionDto) {
    return await this.prisma.inspection.create({ data });
  }

  async findAll() {
    return await paginate(this.prisma.inspection);
  }

  async findOne(id: number) {
    return await this.prisma.inspection.findUniqueOrThrow({ where: { id } });
  }

  async update(id: number, data: UpdateInspectionDto) {
    await this.prisma.inspection.findUniqueOrThrow({ where: { id } });
    return await this.prisma.inspection.update({ where: { id }, data });
  }

  async remove(id: number) {
    await this.prisma.inspection.findUniqueOrThrow({ where: { id } });
    return await this.prisma.inspection.delete({ where: { id } });
  }
}
