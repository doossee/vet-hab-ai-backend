import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { IsEntityExist } from 'src/common/validators';

export class CreateDiseaseDto {
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @IsEntityExist('animal', {
    message: 'Animal with given ID does not exist',
  })
  @ApiProperty({
    description: 'The ID of the animal associated with the disease record.',
    example: 101,
  })
  readonly animalId: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @IsEntityExist('diseaseType', {
    message: 'Disease type with given ID does not exist',
  })
  @ApiProperty({
    description:
      'The type ID of the disease (e.g., bacterial, viral, parasitic).',
    example: 3,
  })
  readonly typeId: number;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  @ApiProperty({
    description: 'The date and time when the disease started.',
    example: '2024-12-01T08:30:00Z',
    type: String, // Ensures Swagger documents it as a string even if it will be a Date object in the backend.
  })
  readonly startTime: Date;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  @ApiProperty({
    description:
      'The date and time when the disease ended or is expected to end.',
    example: '2024-12-14T18:00:00Z',
    type: String, // Same as above, ensures Swagger compatibility.
  })
  readonly endTime: Date;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description:
      'Optional conclusion or summary of the disease (e.g., diagnosis, recovery notes).',
    example: 'The animal has fully recovered after treatment.',
  })
  readonly conclusion: string;
}

export class UpdateDiseaseDto extends PartialType(CreateDiseaseDto) {}
