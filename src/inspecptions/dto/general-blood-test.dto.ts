import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { IsEntityExist } from 'src/common/validators';

export class CreateGeneralBloodTestDto {
  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  @ApiProperty({
    description: 'The date when the blood test was conducted.',
    example: '2024-12-14',
  })
  readonly date: Date;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'A summary or conclusion based on the test results.',
    example: 'No abnormalities detected.',
  })
  readonly conclusion?: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description:
      'The count of erythrocytes (red blood cells) measured in millions per microliter.',
    example: 5.2,
  })
  readonly erythrocyteCount?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description:
      'The count of leukocytes (white blood cells) measured in thousands per microliter.',
    example: 6.8,
  })
  readonly leukocyteCount?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description:
      'The count of thrombocytes (platelets) measured in thousands per microliter.',
    example: 250,
  })
  readonly thrombocyCount?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description:
      'The COE (Erythrocyte Sedimentation Rate), measured in millimeters per hour.',
    example: 10,
  })
  readonly coe?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'The percentage of water in the blood sample.',
    example: 60.5,
  })
  readonly waterPercentage?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'The percentage of dry residue in the blood sample.',
    example: 39.5,
  })
  readonly dryResiduePercentage?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description:
      'The hemoglobin concentration in the blood, measured in grams per deciliter.',
    example: 14.8,
  })
  readonly hemoglobin?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description:
      'The concentration of glutathione in the blood, measured in milligrams per deciliter.',
    example: 1.2,
  })
  readonly glutathione?: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @IsEntityExist('animal', {
    message: 'Animal with given ID does not exist',
  })
  @ApiProperty({
    description:
      'The ID of the animal the general blood test is associated with.',
    example: 101,
  })
  readonly animalId: number;
}

export class UpdateGeneralBloodTestDto extends PartialType(
  CreateGeneralBloodTestDto,
) {}
