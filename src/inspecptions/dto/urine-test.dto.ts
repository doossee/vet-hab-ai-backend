import { ApiProperty, PartialType } from '@nestjs/swagger';
import { SmellType, UrineClarity } from '@prisma/client';
import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
} from 'class-validator';
import { IsEntityExist } from 'src/common/validators';

export class CreateUrineTestDto {
  @IsInt()
  @IsPositive()
  @IsOptional()
  @IsEntityExist('animal', {
    message: 'Animal with given ID does not exist',
  })
  @ApiProperty({
    description: 'The ID of the animal associated with the urine test.',
    example: 102,
  })
  readonly animalId?: number;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @IsEntityExist('disease', {
    message: 'Disease with given ID does not exist',
  })
  @ApiProperty({
    description: 'The ID of the disease suspected or diagnosed in the animal.',
    example: 12,
  })
  readonly diseaseId?: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @IsEntityExist('urineColor', {
    message: 'Urine color with given ID does not exist',
  })
  @ApiProperty({
    description: 'The ID of the color classification of the urine.',
    example: 5,
  })
  readonly colorId: number;

  @IsEnum(UrineClarity)
  @IsNotEmpty()
  @ApiProperty({
    description:
      'The clarity of the urine sample, categorized using the UrineClarity enum.',
    enum: UrineClarity,
    example: UrineClarity.CLEAR,
  })
  readonly clarity: UrineClarity;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    description:
      'The consistency level of the urine sample, represented as an integer value.',
    example: 3,
  })
  readonly consistency: number;

  @IsEnum(SmellType)
  @IsNotEmpty()
  @ApiProperty({
    description:
      'The smell of the urine sample, categorized using the SmellType enum.',
    enum: SmellType,
    example: SmellType.PUNGENT,
  })
  readonly smell: SmellType;
}

export class UpdateUrineTestDto extends PartialType(CreateUrineTestDto) {}
