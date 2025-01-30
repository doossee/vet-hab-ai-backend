import { BloodSerumTest } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class BloodSerumTestEntity implements BloodSerumTest {
  constructor({ ...data }: Partial<BloodSerumTestEntity>) {
    Object.assign(this, data);
  }

  @ApiProperty({
    description: 'Unique identifier for the blood serum test.',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'The total protein level in the blood serum (g/dL).',
    example: 7.2,
  })
  totalProtein: number;

  @ApiProperty({
    description: 'The total calcium level in the blood serum (mg/dL).',
    example: 9.5,
  })
  totalCalcium: number;

  @ApiProperty({
    description: 'The level of organic phosphorus in the blood serum (mg/dL).',
    example: 3.5,
  })
  organicPhosphorus: number;

  @ApiProperty({
    description: 'The albumen concentration in the blood serum (g/dL).',
    example: 4.0,
  })
  albumen: number;

  @ApiProperty({
    description: 'The alpha-globulin concentration in the blood serum (g/dL).',
    example: 1.2,
  })
  alphaGlobulin: number;

  @ApiProperty({
    description: 'The beta-globulin concentration in the blood serum (g/dL).',
    example: 1.0,
  })
  betaGlobulin: number;

  @ApiProperty({
    description: 'The gamma-globulin concentration in the blood serum (g/dL).',
    example: 0.8,
  })
  gammaGlobulin: number;

  @ApiProperty({
    description: 'The creatine level in the blood serum (mg/dL).',
    example: 1.0,
  })
  creatine: number;

  @ApiProperty({
    description: 'The alkaline reserve in the blood serum (mmol/L).',
    example: 22.0,
  })
  alkalineReserve: number;

  @ApiProperty({
    description: 'The glucose level in the blood serum (mg/dL).',
    example: 90.0,
  })
  glucose: number;

  @ApiProperty({
    description: 'The total bilirubin level in the blood serum (mg/dL).',
    example: 0.8,
  })
  totalBilirubin: number;

  @ApiProperty({
    description: 'The cholesterol level in the blood serum (mg/dL).',
    example: 180.0,
  })
  cholesterol: number;

  @ApiProperty({
    description: 'The total lipid concentration in the blood serum (mg/dL).',
    example: 600.0,
  })
  totalLipids: number;

  @ApiProperty({
    description: 'The vitamin A concentration in the blood serum (µg/dL).',
    example: 60.0,
  })
  vitaminA: number;

  @ApiProperty({
    description: 'The vitamin B concentration in the blood serum (µg/dL).',
    example: 5.0,
  })
  vitaminB: number;

  @ApiProperty({
    description: 'The lactic acid level in the blood serum (mmol/L).',
    example: 1.5,
  })
  lacticAcid: number;

  @ApiProperty({
    description: 'The pyruvic acid level in the blood serum (mg/dL).',
    example: 1.2,
  })
  pyruvicAcid: number;

  @ApiProperty({
    description: 'The citric acid level in the blood serum (mg/dL).',
    example: 1.5,
  })
  citricAcid: number;

  @ApiProperty({
    description: 'The urea level in the blood serum (mg/dL).',
    example: 25.0,
  })
  urea: number;

  @ApiProperty({
    description: 'The uric acid level in the blood serum (mg/dL).',
    example: 5.0,
  })
  ureaAcid: number;

  @ApiProperty({
    description: 'The ID of the animal this test is associated with.',
    example: 101,
  })
  animalId: number;

  @ApiProperty({
    description: 'The date and time when the test was created.',
    example: '2024-12-14T09:15:30Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'The date and time when the test was last updated.',
    example: '2024-12-14T10:00:00Z',
  })
  updatedAt: Date;
}
