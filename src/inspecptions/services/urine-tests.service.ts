import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateUrineTestDto, UpdateUrineTestDto } from '../dto';
import { PaginateFunction, paginator } from 'src/common/pagination';

const paginate: PaginateFunction = paginator({ perPage: 30 });

@Injectable()
export class UrineTestsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUrineTestDto) {
    return await this.prisma.urineTest.create({ 
      data, 
      include: {
        animal: true,
        color: true,
        disease: true
    } });
    
  }

  async findAll() {
    const include: any = {
      animal: true,
      color: true,
      disease: true,
    }
    return await paginate(
      this.prisma.urineTest,
      include
    );
  }

  async findOne(id: number) {
    return await this.prisma.urineTest.findUniqueOrThrow({
      where: { id },
      include: {
        animal: true,
        color: true,
        disease: true,
      }
    });
  }

  async update(id: number, data: UpdateUrineTestDto) {
    await this.prisma.urineTest.findUniqueOrThrow({ where: { id } });
    return await this.prisma.urineTest.update({
      where: { id },
      data,
      include: {
        animal: true,
        color: true,
        disease: true,
      }
    });
  }

  async remove(id: number) {
    await this.prisma.urineTest.findUniqueOrThrow({ where: { id } });
    return await this.prisma.urineTest.delete({ 
      where: { id },
      include: {
        animal: true,
        color: true,
        disease: true,
      }
    });
  }
}
