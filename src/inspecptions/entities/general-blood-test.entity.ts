import { ApiProperty } from '@nestjs/swagger';
import { GeneralBloodTest } from '@prisma/client';

export class GeneralBloodTestEntity implements GeneralBloodTest {
  constructor({ ...data }: Partial<GeneralBloodTestEntity>) {
    Object.assign(this, data);
  }

  @ApiProperty({
    description: 'Unique identifier of the blood test',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Date of the blood test',
    example: '2023-12-11T00:00:00Z',
    type: String,
    format: 'date-time',
  })
  date: Date;

  @ApiProperty({
    description: 'Conclusion of the blood test results (optional)',
    example: 'Normal parameters',
    required: false,
  })
  conclusion: string | null;

  @ApiProperty({
    description: 'Erythrocyte count (optional)',
    example: 5.5,
    required: false,
  })
  erythrocyteCount: number | null;

  @ApiProperty({
    description: 'Leukocyte count (optional)',
    example: 12.0,
    required: false,
  })
  leukocyteCount: number | null;

  @ApiProperty({
    description: 'Thrombocyte count (optional)',
    example: 200.0,
    required: false,
  })
  thrombocyteCount: number | null;

  @ApiProperty({
    description: 'Coefficient of erythrocytes (COE) (optional)',
    example: 1.2,
    required: false,
  })
  coe: number | null;

  @ApiProperty({
    description: 'Percentage of water in the blood (optional)',
    example: 60.0,
    required: false,
  })
  waterPercentage: number | null;

  @ApiProperty({
    description: 'Percentage of dry residue in the blood (optional)',
    example: 40.0,
    required: false,
  })
  dryResiduePercentage: number | null;

  @ApiProperty({
    description: 'Hemoglobin level (optional)',
    example: 15.0,
    required: false,
  })
  hemoglobin: number | null;

  @ApiProperty({
    description: 'Glutathione level (optional)',
    example: 0.8,
    required: false,
  })
  glutathione: number | null;

  @ApiProperty({
    description: 'ID of the animal associated with the blood test',
    example: 101,
  })
  animalId: number;

  @ApiProperty({
    description: 'Creation timestamp',
    example: '2023-12-11T00:00:00Z',
    type: String,
    format: 'date-time',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Last update timestamp',
    example: '2023-12-12T00:00:00Z',
    type: String,
    format: 'date-time',
  })
  updatedAt: Date;
}
