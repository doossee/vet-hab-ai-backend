import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateGeneralInspectionDto, GeneralInspectionQueryParamsDto, UpdateGeneralInspectionDto } from '../dto';
import { PaginateFunction, paginator } from 'src/common/pagination';
import { InspectionType, Prisma } from '@prisma/client';

const paginate: PaginateFunction = paginator({ perPage: 30 });

@Injectable()
export class GeneralInspectionsService {
  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreateGeneralInspectionDto) {
    const {
      temperature,
      pulse,
      respiratoryRate,
      rumination,
      conclusion,
      ...genInsData
    } = data;
    const genInspection = await this.prisma.generalInspection.create({ data: genInsData });

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
      include: {
        animal: true,
        leatherCover: true,
        eyelid: true,
        color: true,
        inspection: true, 
      }
    });
  }

  async findAll(params: GeneralInspectionQueryParamsDto) {
    const {
      page,
      perPage,
      byId,
    } = params;

    const where: Prisma.GeneralInspectionWhereInput = {
      
    };

    const orderBy: Prisma.GeneralInspectionOrderByWithRelationInput = {
      ...(byId && { id: byId }),
    };

    const include: any = {
      animal: true,
      leatherCover: true,
      eyelid: true,
      color: true,
      inspection: true,     
    };

    return await paginate(
      this.prisma.generalInspection,
      { where, orderBy, include },
      { page, perPage }
    );
  }

  async findOne(id: number) {
    return await this.prisma.generalInspection.findUniqueOrThrow({
      where: { id },
      include: { 
        animal: true,
        leatherCover: true,
        eyelid: true,
        color: true,
        inspection: true,
      }
    });
  }

  async update(id: number, data: UpdateGeneralInspectionDto) {
    const { 
      temperature, 
      pulse, 
      respiratoryRate, 
      rumination, 
      conclusion, 
      ...genInsData 
    } = data;
    const genInspection = await this.prisma.generalInspection.findUniqueOrThrow({ where: { id } });

    await this.prisma.inspection.update({
      where: { generalInspectionId: genInspection.id },
      data: {
        temperature,
        pulse,
        respiratoryRate,
        rumination,
        conclusion
      }
    })
    return await this.prisma.generalInspection.update({
      where: { id }, 
      data: genInsData,
      include: {
        animal: true,
        leatherCover: true,
        eyelid: true,
        color: true,
        inspection: true,
      }
    });
  }

  async remove(id: number) {
    await this.prisma.generalInspection.findUniqueOrThrow({ where: { id } });
    return await this.prisma.generalInspection.delete({
      where: { id },
      include: {
        animal: true,
        leatherCover: true,
        eyelid: true,
        color: true,
        inspection: true, 
      }
    });
  }
}
