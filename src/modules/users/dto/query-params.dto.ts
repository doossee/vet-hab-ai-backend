import { ApiProperty } from '@nestjs/swagger';
import { $Enums, Gender, UserRole } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsInt, IsOptional, IsPositive } from 'class-validator';
import { BaseQueryParamsDto, SortOrder } from 'src/common/dto';

export class UserQueryParamsDto extends BaseQueryParamsDto {
  @IsEnum(Gender)
  @IsOptional()
  @ApiProperty({
    description: 'Фильтр по полу пользователя (MALE или FEMALE)',
    enum: Gender,
    required: false,
  })
  readonly gender?: Gender;

  @IsEnum(UserRole)
  @IsOptional()
  @ApiProperty({
    description: 'Фильтр по роли пользователя (например, ADMIN, USER)',
    enum: UserRole,
    required: false,
  })
  readonly role?: UserRole;

  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @ApiProperty({
    description: 'Фильтр по дате рождения пользователя в формате ISO',
    example: '1990-01-01T00:00:00.000Z',
    required: false,
  })
  readonly birthDate?: Date;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'Фильтр по идентификатору района',
    example: 10,
    required: false,
  })
  readonly districtId?: number;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'Фильтр по идентификатору региона',
    example: 5,
    required: false,
  })
  readonly regionId?: number;

  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @ApiProperty({
    description: 'Фильтр по дате создания пользователя в формате ISO',
    example: '2024-01-01T00:00:00.000Z',
    required: false,
  })
  readonly createdDate?: Date;

  @IsEnum(SortOrder)
  @IsOptional()
  @ApiProperty({
    description: 'Сортировка по дате рождения (ASC или DESC)',
    enum: SortOrder,
    required: false,
  })
  readonly byBirthDate?: SortOrder;

  @IsEnum(SortOrder)
  @IsOptional()
  @ApiProperty({
    description: 'Сортировка по полу (ASC или DESC)',
    enum: SortOrder,
    required: false,
  })
  readonly byGender?: SortOrder;

  @IsEnum(SortOrder)
  @IsOptional()
  @ApiProperty({
    description: 'Сортировка по роли (ASC или DESC)',
    enum: SortOrder,
    required: false,
  })
  readonly byRole?: SortOrder;

  @IsEnum(SortOrder)
  @IsOptional()
  @ApiProperty({
    description: 'Сортировка по идентификатору района (ASC или DESC)',
    enum: SortOrder,
    required: false,
  })
  readonly byDistrictId?: SortOrder;

  @IsEnum(SortOrder)
  @IsOptional()
  @ApiProperty({
    description: 'Сортировка по идентификатору региона (ASC или DESC)',
    enum: SortOrder,
    required: false,
  })
  readonly byRegionId?: SortOrder;

  @IsEnum(SortOrder)
  @IsOptional()
  @ApiProperty({
    description: 'Сортировка по дате создания (ASC или DESC)',
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
    description: 'Фильтр по идентификатору ветеринара',
    example: 15,
    required: false,
  })
  readonly veterinarianId?: number;

  @IsEnum(SortOrder)
  @IsOptional()
  @ApiProperty({
    description: 'Сортировка по идентификатору ветеринара (ASC или DESC)',
    enum: SortOrder,
    required: false,
  })
  readonly byVeterinarianId?: number;
}
