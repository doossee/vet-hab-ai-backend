import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Breed, Gender } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { IsEntityExist } from 'src/common/validators';

export class CreateAnimalDto {
  @IsString()
  @MinLength(1)
  @MaxLength(10)
  @IsNotEmpty()
  @ApiProperty({
    description: 'Unique identification code for the animal',
    example: 'A123456789',
    maxLength: 10,
    minLength: 1,
  })
  readonly idCode: string;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  @ApiProperty({
    description: 'Date when the animal arrived',
    example: '2023-12-11T00:00:00Z',
    type: String,
    format: 'date-time',
  })
  readonly arrivalDate: Date;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @IsEntityExist('farmer', 'userPtrId', {
    message: 'Farmer with given ID does not exist',
  })
  @ApiProperty({
    description: 'ID of the farmer who owns the animal',
    example: 1,
  })
  readonly farmerId: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @IsEntityExist('animalType', {
    message: 'Animal type with given ID does not exist',
  })
  @ApiProperty({
    description: 'ID representing the type of the animal',
    example: 5,
  })
  readonly typeId: number;

  @IsString()
  @MinLength(1)
  @MaxLength(50)
  @IsNotEmpty()
  @ApiProperty({
    description: 'Name of the animal',
    example: 'Bella',
    maxLength: 50,
    minLength: 1,
  })
  readonly name: string;

  @IsEnum(Gender)
  @IsNotEmpty()
  @ApiProperty({
    description: 'Gender of the animal',
    example: Gender.MALE,
    enum: Gender,
  })
  readonly gender: Gender;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Breed of the animal',
    example: 1
  })
  readonly breedId: number;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  @ApiProperty({
    description: 'Birth date of the animal',
    example: '2023-01-01T00:00:00Z',
    type: String,
    format: 'date-time',
  })
  readonly birthDate: Date;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Weight of the animal in kilograms',
    example: 150.5,
  })
  readonly weight: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @IsEntityExist('color', {
    message: 'Color with given ID does not exist',
  })
  @ApiProperty({
    description: 'ID of the color representing the animal',
    example: 3,
  })
  readonly colorId: number;
}

export class UpdateAnimalDto extends PartialType(CreateAnimalDto) {}
