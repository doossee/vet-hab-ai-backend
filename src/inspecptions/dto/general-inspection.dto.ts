import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  BodyStructure,
  BodyType,
  CustomerType,
  ObesityType,
} from '@prisma/client';
import { IsEnum, IsInt, IsNotEmpty, IsPositive } from 'class-validator';

export class CreateGeneralInspectionDto {
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The ID of the animal undergoing the general inspection.',
    example: 101,
  })
  readonly animalId: number;

  @IsEnum(BodyType)
  @IsNotEmpty()
  @ApiProperty({
    description: 'The body type of the animal.',
    enum: BodyType,
    example: BodyType.MEDIUM,
  })
  readonly bodyType: BodyType;

  @IsEnum(BodyStructure)
  @IsNotEmpty()
  @ApiProperty({
    description: 'The body structure of the animal.',
    enum: BodyStructure,
    example: BodyStructure.COARSE,
  })
  readonly bodyStructure: BodyStructure;

  @IsEnum(ObesityType)
  @IsNotEmpty()
  @ApiProperty({
    description: 'The obesity level/type of the animal.',
    enum: ObesityType,
    example: ObesityType.CACHEXIA,
  })
  readonly obesity: ObesityType;

  @IsEnum(CustomerType)
  @IsNotEmpty()
  @ApiProperty({
    description: 'The customer type associated with the animal.',
    enum: CustomerType,
    example: CustomerType.CALM,
  })
  readonly customerType: CustomerType;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The ID representing the color of the animal.',
    example: 3,
  })
  readonly colorId: number;
}

export class UpdateGeneralInspectionDto extends PartialType(
  CreateGeneralInspectionDto,
) {}
