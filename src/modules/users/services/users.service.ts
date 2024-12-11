import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../dto';
import { PrismaService } from 'nestjs-prisma';
import * as bcrypt from 'bcryptjs';
import { UserQueryParamsDto } from '../dto/query-params.dto';
import { Prisma } from '@prisma/client';
import { PaginateFunction, paginator } from 'src/common/pagination';

const paginate: PaginateFunction = paginator({ perPage: 10 });

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateUserDto) {
    try {
      const hashedPassword = await bcrypt.hash(data.password, 10);

      return await this.prisma.user.create({
        data: {
          ...data,
          password: hashedPassword,
        },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new BadRequestException('A user with this data already exists');
      }
      throw error;
    }
  }

  async findAll(params: UserQueryParamsDto) {
    const {
      search,
      page,
      perPage,
      gender,
      role,
      birthDate,
      districtId,
      regionId,
      createdDate,
      byId,
      byBirthDate,
      byGender,
      byRole,
      byDistrictId,
      byRegionId,
      byCreatedDate,
    } = params;

    const where: Prisma.UserWhereInput = {
      ...(search && {
        user: {
          OR: [
            { firstName: { contains: search, mode: 'insensitive' } },
            { lastName: { contains: search, mode: 'insensitive' } },
            { middleName: { contains: search, mode: 'insensitive' } },
          ],
        },
      }),
      ...(gender && { gender: gender }),
      ...(role && { role: role }),
      ...(birthDate && { birthDate: birthDate }),
      ...(districtId && { districtId: districtId }),
      ...(regionId && { district: { regionId: regionId } }),
      ...(createdDate && {
        createdAt: {
          gte: new Date(createdDate.setHours(0, 0, 0, 0)),
          lt: new Date(createdDate.setHours(23, 59, 59, 999)),
        },
      }),
    };

    const orderBy: Prisma.UserOrderByWithRelationInput = {
      ...(byId && { id: byId }),
      ...(byGender && { gender: byGender }),
      ...(byRole && { role: byRole }),
      ...(byBirthDate && { birthDate: byBirthDate }),
      ...(byDistrictId && { districtId: byDistrictId }),
      ...(byRegionId && { district: { regionId: byRegionId } }),
      ...(byCreatedDate && { createdAt: byCreatedDate }),
    };

    const include: any = {
      district: {
        inclucde: {
          region: {
            select: {
              name: true,
            },
          },
        },
      },
    };

    return paginate(
      this.prisma.veterinarian,
      { where, orderBy, include },
      { page, perPage },
    );
  }

  async findOne(id: number) {
    return await this.prisma.user.findUniqueOrThrow({
      where: { id },
      include: {
        district: {
          include: {
            region: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
  }

  async update(id: number, data: UpdateUserDto) {
    await this.prisma.user.findUniqueOrThrow({ where: { id } });
    return await this.prisma.user.update({
      where: { id },
      data,
      include: {
        district: {
          include: {
            region: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
  }

  async remove(id: number) {
    await this.prisma.user.findUniqueOrThrow({ where: { id } });
    return await this.prisma.user.delete({ where: { id } });
  }
}
