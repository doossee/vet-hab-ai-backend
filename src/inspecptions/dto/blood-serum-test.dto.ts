import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
} from 'class-validator';
import { IsEntityExist } from 'src/common/validators';

export class CreateBloodSerumTestDto {
  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'The total protein level in the blood serum (g/dL).',
    example: 7.2,
  })
  readonly totalProtein?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'The total calcium level in the blood serum (mg/dL).',
    example: 9.5,
  })
  readonly totalCalcium?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'The level of organic phosphorus in the blood serum (mg/dL).',
    example: 3.5,
  })
  readonly organicPhosphorus?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'The albumen concentration in the blood serum (g/dL).',
    example: 4.0,
  })
  readonly albumen?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'The alpha-globulin concentration in the blood serum (g/dL).',
    example: 1.2,
  })
  readonly alphaGlobulin?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'The beta-globulin concentration in the blood serum (g/dL).',
    example: 1.0,
  })
  readonly betaGlobulin?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'The gamma-globulin concentration in the blood serum (g/dL).',
    example: 0.8,
  })
  readonly gammaGlobulin?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'The creatine level in the blood serum (mg/dL).',
    example: 1.0,
  })
  readonly creatine?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'The alkaline reserve in the blood serum (mmol/L).',
    example: 22.0,
  })
  readonly alkalineReserve?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'The glucose level in the blood serum (mg/dL).',
    example: 90.0,
  })
  readonly glucose?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'The total bilirubin level in the blood serum (mg/dL).',
    example: 0.8,
  })
  readonly totalBilirubin?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'The cholesterol level in the blood serum (mg/dL).',
    example: 180.0,
  })
  readonly cholesterol?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'The total lipid concentration in the blood serum (mg/dL).',
    example: 600.0,
  })
  readonly totalLipids?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'The vitamin A concentration in the blood serum (µg/dL).',
    example: 60.0,
  })
  readonly vitaminA?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'The vitamin B concentration in the blood serum (µg/dL).',
    example: 5.0,
  })
  readonly vitaminB?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'The lactic acid level in the blood serum (mmol/L).',
    example: 1.5,
  })
  readonly lacticAcid?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'The pyruvic acid level in the blood serum (mg/dL).',
    example: 1.2,
  })
  readonly pyruvicAcid?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'The citric acid level in the blood serum (mg/dL).',
    example: 1.5,
  })
  readonly citricAcid?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'The urea level in the blood serum (mg/dL).',
    example: 25.0,
  })
  readonly urea?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'The uric acid level in the blood serum (mg/dL).',
    example: 5.0,
  })
  readonly ureaAcid?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'The copper (trace element) level in blood serum (mmol/L).',
    example: 0.015,
  })
  readonly copper?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'The cobalt (trace element) level in blood serum (mmol/L).',
    example: 0.002,
  })
  readonly cobalt?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'The manganese (trace element) level in blood serum (mmol/L).',
    example: 0.018,
  })
  readonly manganese?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'The zinc (trace element) level in blood serum (mmol/L).',
    example: 0.12,
  })
  readonly zinc?: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @IsEntityExist('animal', {
    message: 'Animal with given ID does not exist',
  })
  @ApiProperty({
    description:
      'The ID of the animal the blood serum test is associated with.',
    example: 101,
  })
  readonly animalId: number;
}

export class UpdateBloodSerumTestDto extends PartialType(
  CreateBloodSerumTestDto,
) {}
