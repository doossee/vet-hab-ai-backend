import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateGeneralInspectionDto, UpdateGeneralInspectionDto } from '../dto';
import { PaginateFunction, paginator } from 'src/common/pagination';
import { InspectionType } from '@prisma/client';

const paginate: PaginateFunction = paginator({ perPage: 30 });

@Injectable()
export class GeneralInspectionsService {
  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreateGeneralInspectionDto) {
    const { temperature, pulse, respiratoryRate, rumination, conclusion } = data;
    const genInspection = await this.prisma.generalInspection.create({ data });

    await this.prisma.inspection.create({
      data: {
        generalInspectionId: genInspection.id,
        temperature,
        pulse,
        respiratoryRate,
        rumination,
        type: InspectionType.GENERAL,
        conclusion,
      }
    });

    return this.prisma.generalInspection.findUnique({
      where: { id: genInspection.id },
      include: { inspection: true }
    });
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
