import { ApiProperty, PartialType } from '@nestjs/swagger';
import { DungClarity, DungForm, SmellType } from '@prisma/client';
import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
} from 'class-validator';
import { IsEntityExist } from 'src/common/validators';

export class CreateDungTestDto {
  @IsInt()
  @IsPositive()
  @IsOptional()
  @IsEntityExist('animal', {
    message: 'Animal with given ID does not exist',
  })
  @ApiProperty({
    description: 'The ID of the animal associated with the dung test.',
    example: 101,
  })
  readonly animalId?: number;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @IsEntityExist('disease', {
    message: 'Disease with given ID does not exist',
  })
  @ApiProperty({
    description:
      'The ID of the disease associated with the dung test, if applicable.',
    example: 5,
  })
  readonly diseaseId?: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @IsEntityExist('dungColor', {
    message: 'Dung color with given ID does not exist',
  })
  @ApiProperty({
    description: 'The ID of the color associated with the dung.',
    example: 3,
  })
  readonly colorId: number;

  @IsEnum(DungClarity)
  @IsNotEmpty()
  @ApiProperty({
    description: 'The clarity of the dung sample.',
    enum: DungClarity,
    example: DungClarity.CLEAR,
  })
  readonly clarity: DungClarity;

  @IsEnum(SmellType)
  @IsNotEmpty()
  @ApiProperty({
    description: 'The smell type of the dung sample.',
    enum: SmellType,
    example: SmellType.HAS,
  })
  readonly smell: SmellType;

  @IsEnum(DungForm)
  @IsNotEmpty()
  @ApiProperty({
    description: 'The form of the dung sample.',
    enum: DungForm,
    example: DungForm.SOLID,
  })
  readonly form: DungForm;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty({
    description:
      'The consistency of the dung sample, measured as an integer value.',
    example: 5,
  })
  readonly consistency: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The number of worms observed in the dung sample.',
    example: 2,
  })
  readonly worms: number;
}

export class UpdateDungTestDto extends PartialType(CreateDungTestDto) {}
