import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import * as bcrypt from 'bcryptjs';
import { CreateVeterinarianDto, UpdateVeterinarianDto } from '../dto';
import { Prisma, UserRole } from '@prisma/client';
import { PaginateFunction, paginator } from 'src/common/pagination';
import { VeterinarianQueryParamsDto } from '../dto/query-params.dto';

const paginate: PaginateFunction = paginator({ perPage: 10 });

@Injectable()
export class VeterinariansService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateVeterinarianDto) {
    try {
      const hashedPassword = await bcrypt.hash(data.password, 10);

      // Create the user first
      const user = await this.prisma.user.create({
        data: {
          ...data,
          password: hashedPassword,
          role: UserRole.FARMER,
        },
      });

      // Create the veterinarian and link it to the user
      const veterinarian = await this.prisma.veterinarian.create({
        data: {
          userPtrId: user.id,
        },
      });

      return await this.prisma.veterinarian.findUnique({
        where: { userPtrId: veterinarian.userPtrId },
        include: {
          user: {
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
          },
        }
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new BadRequestException('A user with this data already exists');
      }
      throw error;
    }
  }

  async findAll(params: VeterinarianQueryParamsDto) {
    const {
      search,
      page,
      perPage,
      gender,
      birthDate,
      districtId,
      regionId,
      createdDate,
      byId,
      byBirthDate,
      byGender,
      byDistrictId,
      byRegionId,
      byCreatedDate,
    } = params;

    const where: Prisma.VeterinarianWhereInput = {
      ...(search && {
        user: {
          OR: [
            { firstName: { contains: search, mode: 'insensitive' } },
            { lastName: { contains: search, mode: 'insensitive' } },
            { middleName: { contains: search, mode: 'insensitive' } },
          ],
        },
      }),
      ...(gender && { user: { gender: gender } }),
      ...(birthDate && { user: { birthDate: birthDate } }),
      ...(districtId && { user: { districtId: districtId } }),
      ...(regionId && { user: { district: { regionId: regionId } } }),
      ...(createdDate && {
        user: {
          createdAt: {
            gte: new Date(createdDate.setHours(0, 0, 0, 0)),
            lt: new Date(createdDate.setHours(23, 59, 59, 999)),
          },
        },
      }),
    };

    const orderBy: Prisma.VeterinarianOrderByWithRelationInput = {
      ...(byId && { id: byId }),
      ...(byGender && { user: { gender: byGender } }),
      ...(byBirthDate && { user: { birthDate: byBirthDate } }),
      ...(byDistrictId && { user: { districtId: byDistrictId } }),
      ...(byRegionId && { user: { district: { regionId: byRegionId } } }),
      ...(byCreatedDate && { user: { createdAt: byCreatedDate } }),
    };

    const include: any = {
      user: {
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
      },
    };

    return paginate(
      this.prisma.veterinarian,
      { where, orderBy, include },
      { page, perPage },
    );
  }

  async findOne(id: number) {
    return await this.prisma.veterinarian.findUniqueOrThrow({
      where: { userPtrId: id },
      include: {
        user: {
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
        },
      },
    });
  }

  async update(id: number, data: UpdateVeterinarianDto) {
    await this.prisma.veterinarian.findUniqueOrThrow({
      where: { userPtrId: id },
    });
    return await this.prisma.veterinarian.update({
      where: { userPtrId: id },
      data: {
        user: {
          update: {
            data,
          },
        },
      },
      include: {
        user: {
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
        },
      },
    });
  }

  async remove(id: number) {
    const veterinarian = await this.prisma.veterinarian.findUniqueOrThrow({
      where: { userPtrId: id },
    });
    return await this.prisma.user.delete({
      where: { id: veterinarian.userPtrId },
    });
  }
}
