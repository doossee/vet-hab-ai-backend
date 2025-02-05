import { ApiProperty } from '@nestjs/swagger';
import { $Enums, Breed, Gender, UserRole } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsIn, IsInt, IsOptional, IsPositive } from 'class-validator';
import { BaseQueryParamsDto, SortOrder } from 'src/common/dto';

export class AnimalQueryParamsDto extends BaseQueryParamsDto {
  @IsInt()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'Filter by farmer ID',
    example: 10,
    required: false,
  })
  readonly farmerId?: number;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'Filter by animal type ID',
    example: 3,
    required: false,
  })
  readonly typeId?: number;

  @IsEnum(Gender)
  @IsOptional()
  @ApiProperty({
    description: 'Filter by animal gender (MALE or FEMALE)',
    enum: Gender,
    required: false,
  })
  readonly gender?: Gender;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'Filter by animal breedId',
    type: Number,
    required: false,
  })
  readonly breedId?: number;

  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @ApiProperty({
    description: 'Filter by animal birth date in ISO format',
    example: '2020-01-01T00:00:00.000Z',
    required: false,
  })
  readonly birthDate?: Date;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'Filter by color ID',
    example: 2,
    required: false,
  })
  readonly colorId?: number;

  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @ApiProperty({
    description: 'Filter by creation date in ISO format',
    example: '2024-01-01T00:00:00.000Z',
    required: false,
  })
  readonly createdDate?: Date;

  @IsEnum(SortOrder)
  @IsOptional()
  @ApiProperty({
    description: 'Sort by farmer ID (ASC or DESC)',
    enum: SortOrder,
    required: false,
  })
  readonly byFarmedId?: SortOrder;

  @IsEnum(SortOrder)
  @IsOptional()
  @ApiProperty({
    description: 'Sort by type ID (ASC or DESC)',
    enum: SortOrder,
    required: false,
  })
  readonly byTypeId?: SortOrder;

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
    description: 'Sort by breed (ASC or DESC)',
    enum: SortOrder,
    required: false,
  })
  readonly byBreedId?: SortOrder;

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
    description: 'Sort by color ID (ASC or DESC)',
    enum: SortOrder,
    required: false,
  })
  readonly byColorId?: SortOrder;

  @IsEnum(SortOrder)
  @IsOptional()
  @ApiProperty({
    description: 'Sort by creation date (ASC or DESC)',
    enum: SortOrder,
    required: false,
  })
  readonly byCreatedDate?: SortOrder;
}

export class VaccineQueryParamsDto extends BaseQueryParamsDto {
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @ApiProperty({
    description: 'Filter by vaccine date in ISO format',
    example: '2024-01-01T00:00:00.000Z',
    required: false,
  })
  readonly date?: Date;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'Filter by vaccine type ID',
    example: 4,
    required: false,
  })
  readonly typeId?: number;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'Filter by animal ID',
    example: 15,
    required: false,
  })
  readonly animalId?: number;

  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @ApiProperty({
    description: 'Filter by creation date in ISO format',
    example: '2024-01-01T00:00:00.000Z',
    required: false,
  })
  readonly createdDate?: Date;

  @IsEnum(SortOrder)
  @IsOptional()
  @ApiProperty({
    description: 'Sort by vaccine date (ASC or DESC)',
    enum: SortOrder,
    required: false,
  })
  readonly byDate?: SortOrder;

  @IsEnum(SortOrder)
  @IsOptional()
  @ApiProperty({
    description: 'Sort by vaccine type ID (ASC or DESC)',
    enum: SortOrder,
    required: false,
  })
  readonly byTypeId?: SortOrder;

  @IsEnum(SortOrder)
  @IsOptional()
  @ApiProperty({
    description: 'Sort by animal ID (ASC or DESC)',
    enum: SortOrder,
    required: false,
  })
  readonly byAnimalId?: SortOrder;

  @IsEnum(SortOrder)
  @IsOptional()
  @ApiProperty({
    description: 'Sort by creation date (ASC or DESC)',
    enum: SortOrder,
    required: false,
  })
  readonly byCreatedDate?: SortOrder;
}
