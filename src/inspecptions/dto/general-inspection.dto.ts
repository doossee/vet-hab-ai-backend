import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  BodyPosition,
  BodyStructure,
  BodyType,
  CharacterType,
  ObesityType,
  Prisma,
} from '@prisma/client';
import { IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';
import { IsEntityExist } from 'src/common/validators';

export class CreateGeneralInspectionDto implements Prisma.GeneralInspectionUncheckedCreateInput {
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @IsEntityExist('animal', {
    message: 'Animal with given ID does not exist',
  })
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

  @IsEnum(BodyPosition)
  @IsNotEmpty()
  @ApiProperty({
    description: 'The body position of the animal.',
    enum: BodyPosition,
    example: BodyPosition.FORCED,
  })
  readonly bodyPosition: BodyPosition;

  @IsEnum(ObesityType)
  @IsNotEmpty()
  @ApiProperty({
    description: 'The obesity level/type of the animal.',
    enum: ObesityType,
    example: ObesityType.CACHEXIA,
  })
  readonly obesity: ObesityType;

  @IsEnum(CharacterType)
  @IsNotEmpty()
  @ApiProperty({
    description: 'The customer type associated with the animal.',
    enum: CharacterType,
    example: CharacterType.CALM,
  })
  readonly character: CharacterType;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @IsEntityExist('leatherCover', {
    message: 'Leather cover with given ID does not exist',
  })
  @ApiProperty({
    description: 'The ID representing the leather cover of the animal.',
    example: 3,
  })
  readonly leatherCoverId: number;  

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @IsEntityExist('eyelid', {
    message: 'Eyelid with given ID does not exist',
  })
  @ApiProperty({
    description: 'The ID representing the eyelid of the animal.',
    example: 3,
  })
  readonly eyelidId: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @IsEntityExist('color', {
    message: 'Color with given ID does not exist',
  })
  @ApiProperty({
    description: 'The ID representing the color of the animal.',
    example: 3,
  })
  readonly colorId: number;

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

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'A summary or conclusion based on the test results.',
    example: 'No abnormalities detected.',
  })
  readonly conclusion?: string;
}

export class UpdateGeneralInspectionDto extends PartialType(
  CreateGeneralInspectionDto,
) {}
