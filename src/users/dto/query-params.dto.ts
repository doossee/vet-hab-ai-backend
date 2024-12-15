import { ApiProperty } from '@nestjs/swagger';
import { $Enums, Gender, UserRole } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsInt, IsOptional, IsPositive } from 'class-validator';
import { BaseQueryParamsDto, SortOrder } from 'src/common/dto';

export class UserQueryParamsDto extends BaseQueryParamsDto {
  @IsEnum(Gender)
  @IsOptional()
  @ApiProperty({
    description: 'Filter by user gender (MALE or FEMALE)',
    enum: Gender,
    required: false,
  })
  readonly gender?: Gender;

  @IsEnum(UserRole)
  @IsOptional()
  @ApiProperty({
    description: 'Filter by user role (e.g., ADMIN, USER)',
    enum: UserRole,
    required: false,
  })
  readonly role?: UserRole;

  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @ApiProperty({
    description: 'Filter by user birth date in ISO format',
    example: '1990-01-01T00:00:00.000Z',
    required: false,
  })
  readonly birthDate?: Date;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'Filter by district ID',
    example: 10,
    required: false,
  })
  readonly districtId?: number;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'Filter by region ID',
    example: 5,
    required: false,
  })
  readonly regionId?: number;

  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @ApiProperty({
    description: 'Filter by user creation date in ISO format',
    example: '2024-01-01T00:00:00.000Z',
    required: false,
  })
  readonly createdDate?: Date;

  @IsEnum(SortOrder)
  @IsOptional()
  @ApiProperty({
    description: 'Sort by birth date (ASC or DESC)',
    enum: SortOrder,
    required: false,
  })
  readonly byBirthDate?: SortOrder;

  @IsEnum(SortOrder)
  @IsOptional()
  @ApiProperty({
    description: 'Sort by gender (ASC or DESC)',
    enum: SortOrder,
    required: false,
  })
  readonly byGender?: SortOrder;

  @IsEnum(SortOrder)
  @IsOptional()
  @ApiProperty({
    description: 'Sort by role (ASC or DESC)',
    enum: SortOrder,
    required: false,
  })
  readonly byRole?: SortOrder;

  @IsEnum(SortOrder)
  @IsOptional()
  @ApiProperty({
    description: 'Sort by district ID (ASC or DESC)',
    enum: SortOrder,
    required: false,
  })
  readonly byDistrictId?: SortOrder;

  @IsEnum(SortOrder)
  @IsOptional()
  @ApiProperty({
    description: 'Sort by region ID (ASC or DESC)',
    enum: SortOrder,
    required: false,
  })
  readonly byRegionId?: SortOrder;

  @IsEnum(SortOrder)
  @IsOptional()
  @ApiProperty({
    description: 'Sort by creation date (ASC or DESC)',
    enum: SortOrder,
    required: false,
  })
  readonly byCreatedDate?: SortOrder;
}

export class VeterinarianQueryParamsDto extends UserQueryParamsDto {
  readonly role?: UserRole = null;
  readonly byRole?: SortOrder = null;
}

export class FarmerQueryParamsDto extends UserQueryParamsDto {
  readonly role?: UserRole = null;
  readonly byRole?: SortOrder = null;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'Filter by veterinarian ID',
    example: 15,
    required: false,
  })
  readonly veterinarianId?: number;

  @IsEnum(SortOrder)
  @IsOptional()
  @ApiProperty({
    description: 'Sort by veterinarian ID (ASC or DESC)',
    enum: SortOrder,
    required: false,
  })
  readonly byVeterinarianId?: number;
}
