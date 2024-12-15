import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
} from 'class-validator';

export class CreateInspectionDto {
  @IsInt()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description:
      'The ID of the animal being inspected. This field is optional.',
    example: 101,
  })
  readonly animalId?: number;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description:
      'The ID of the disease associated with the inspection. This field is optional.',
    example: 202,
  })
  readonly diseaseId?: number;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description:
      'The ID of the general inspection record. This field is optional.',
    example: 303,
  })
  readonly generalInspectionId?: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The body temperature of the animal (in degrees Celsius).',
    example: 38.5,
  })
  readonly temperature: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The pulse rate of the animal (beats per minute).',
    example: 72,
  })
  readonly pulse: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The respiratory rate of the animal (breaths per minute).',
    example: 20,
  })
  readonly respiratoryRate: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The rumination rate of the animal (chews per minute).',
    example: 60,
  })
  readonly rumination: number;
}

export class UpdateInspectionDto extends PartialType(CreateInspectionDto) {}
