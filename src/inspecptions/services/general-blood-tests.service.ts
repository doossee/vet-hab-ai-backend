import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateGeneralBloodTestDto, UpdateGeneralBloodTestDto } from '../dto';
import { PaginateFunction, paginator } from 'src/common/pagination';

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

  async findAll() {
    const include: any = {
      animal: true,
    }
    return await paginate(
      this.prisma.generalBloodTest,
      include
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
