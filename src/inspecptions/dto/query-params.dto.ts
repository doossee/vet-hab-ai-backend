import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsInt, IsOptional, IsPositive } from 'class-validator';
import { BaseQueryParamsDto, SortOrder } from 'src/common/dto';

export class GeneralInspectionQueryParamsDto extends BaseQueryParamsDto {
  search?: string = null;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  @ApiProperty({
    description: 'Filter by animal id',
    example: 1,
    required: false,
  })
  readonly animalId?: number;

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
    description: 'Sort by creation date (ASC or DESC)',
    enum: SortOrder,
    required: false,
  })
  readonly byCreatedDate?: SortOrder;
}

export class InspectionQueryParamsDto extends BaseQueryParamsDto {
  search?: string = null;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  @ApiProperty({
    description: 'Filter by animal id',
    example: 1,
    required: false,
  })
  readonly animalId?: number;

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
    description: 'Sort by creation date (ASC or DESC)',
    enum: SortOrder,
    required: false,
  })
  readonly byCreatedDate?: SortOrder;
}
export class DiseaseQueryParamsDto extends BaseQueryParamsDto {
  search?: string = null;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  @ApiProperty({
    description: 'Filter by animal id',
    example: 1,
    required: false,
  })
  readonly animalId?: number;

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
    description: 'Sort by creation date (ASC or DESC)',
    enum: SortOrder,
    required: false,
  })
  readonly byCreatedDate?: SortOrder;
}
export class GeneralBloodTestQueryParamsDto extends BaseQueryParamsDto {
  search?: string = null;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  @ApiProperty({
    description: 'Filter by animal id',
    example: 1,
    required: false,
  })
  readonly animalId?: number;

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
    description: 'Sort by creation date (ASC or DESC)',
    enum: SortOrder,
    required: false,
  })
  readonly byCreatedDate?: SortOrder;
}
export class BloodSerumTestQueryParamsDto extends BaseQueryParamsDto {
  search?: string = null;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  @ApiProperty({
    description: 'Filter by animal id',
    example: 1,
    required: false,
  })
  readonly animalId?: number;

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
    description: 'Sort by creation date (ASC or DESC)',
    enum: SortOrder,
    required: false,
  })
  readonly byCreatedDate?: SortOrder;
}
export class UrineTestQueryParamsDto extends BaseQueryParamsDto {
  search?: string = null;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  @ApiProperty({
    description: 'Filter by animal id',
    example: 1,
    required: false,
  })
  readonly animalId?: number;

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
    description: 'Sort by creation date (ASC or DESC)',
    enum: SortOrder,
    required: false,
  })
  readonly byCreatedDate?: SortOrder;
}
export class DungTestQueryParamsDto extends BaseQueryParamsDto {
  search?: string = null;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  @ApiProperty({
    description: 'Filter by animal id',
    example: 1,
    required: false,
  })
  readonly animalId?: number;

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
    description: 'Sort by creation date (ASC or DESC)',
    enum: SortOrder,
    required: false,
  })
  readonly byCreatedDate?: SortOrder;
}

export class RumenTestQueryParamsDto extends BaseQueryParamsDto {
  search?: string = null;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  @ApiProperty({
    description: 'Filter by animal id',
    example: 1,
    required: false,
  })
  readonly animalId?: number;

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
    description: 'Sort by creation date (ASC or DESC)',
    enum: SortOrder,
    required: false,
  })
  readonly byCreatedDate?: SortOrder;
}
