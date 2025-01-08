import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateBloodSerumTestDto, UpdateBloodSerumTestDto } from '../dto';
import { PaginateFunction, paginator } from 'src/common/pagination';

const paginate: PaginateFunction = paginator({ perPage: 30 });

@Injectable()
export class BloodSerumTestsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateBloodSerumTestDto) {
    return await this.prisma.bloodSerumTest.create({
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
      this.prisma.bloodSerumTest,
      include
    );
  }

  async findOne(id: number) {
    return await this.prisma.bloodSerumTest.findUniqueOrThrow({
      where: { id },
      include: {
        animal: true,
      }
    });
  }

  async update(id: number, data: UpdateBloodSerumTestDto) {
    await this.prisma.bloodSerumTest.findUniqueOrThrow({ where: { id } });
    return await this.prisma.bloodSerumTest.update({ 
      where: { id }, 
      data,
      include: {
        animal: true,
      } 
    });
  }

  async remove(id: number) {
    await this.prisma.bloodSerumTest.findUniqueOrThrow({ where: { id } });
    return await this.prisma.bloodSerumTest.delete({ 
      where: { id },
      include: {
        animal: true,
      }
    });
  }
}
