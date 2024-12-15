import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateUrineTestDto, UpdateUrineTestDto } from '../dto';
import { PaginateFunction, paginator } from 'src/common/pagination';

const paginate: PaginateFunction = paginator({ perPage: 30 });

@Injectable()
export class UrineTestsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUrineTestDto) {
    return await this.prisma.urineTest.create({ data });
  }

  async findAll() {
    return await paginate(this.prisma.urineTest);
  }

  async findOne(id: number) {
    return await this.prisma.urineTest.findUniqueOrThrow({ where: { id } });
  }

  async update(id: number, data: UpdateUrineTestDto) {
    await this.prisma.urineTest.findUniqueOrThrow({ where: { id } });
    return await this.prisma.urineTest.update({ where: { id }, data });
  }

  async remove(id: number) {
    await this.prisma.urineTest.findUniqueOrThrow({ where: { id } });
    return await this.prisma.urineTest.delete({ where: { id } });
  }
}
