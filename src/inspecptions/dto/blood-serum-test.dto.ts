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
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'The total protein level in the blood serum (g/dL).',
    example: 7.2,
  })
  readonly totalProtein?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'The total calcium level in the blood serum (mg/dL).',
    example: 9.5,
  })
  readonly totalCalcium?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'The level of organic phosphorus in the blood serum (mg/dL).',
    example: 3.5,
  })
  readonly organicPhosphorus?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'The albumen concentration in the blood serum (g/dL).',
    example: 4.0,
  })
  readonly albumen?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'The alpha-globulin concentration in the blood serum (g/dL).',
    example: 1.2,
  })
  readonly alphaGlobulin?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'The beta-globulin concentration in the blood serum (g/dL).',
    example: 1.0,
  })
  readonly betaGlobulin?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'The gamma-globulin concentration in the blood serum (g/dL).',
    example: 0.8,
  })
  readonly gammaGlobulin?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'The creatine level in the blood serum (mg/dL).',
    example: 1.0,
  })
  readonly creatine?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'The alkaline reserve in the blood serum (mmol/L).',
    example: 22.0,
  })
  readonly alkalineReserve?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'The glucose level in the blood serum (mg/dL).',
    example: 90.0,
  })
  readonly glucose?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'The total bilirubin level in the blood serum (mg/dL).',
    example: 0.8,
  })
  readonly totalBilrubin?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'The cholesterol level in the blood serum (mg/dL).',
    example: 180.0,
  })
  readonly cholesterol?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'The total lipid concentration in the blood serum (mg/dL).',
    example: 600.0,
  })
  readonly totalLipids?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'The vitamin A concentration in the blood serum (µg/dL).',
    example: 60.0,
  })
  readonly vitaminA?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'The vitamin B concentration in the blood serum (µg/dL).',
    example: 5.0,
  })
  readonly vitaminB?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'The lactic acid level in the blood serum (mmol/L).',
    example: 1.5,
  })
  readonly lacticAcid?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'The pyruvic acid level in the blood serum (mg/dL).',
    example: 1.2,
  })
  readonly pyruvicAcid?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'The citric acid level in the blood serum (mg/dL).',
    example: 1.5,
  })
  readonly citricAcid?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'The urea level in the blood serum (mg/dL).',
    example: 25.0,
  })
  readonly urea?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'The uric acid level in the blood serum (mg/dL).',
    example: 5.0,
  })
  readonly ureaAcid?: number;

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
