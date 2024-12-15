import { ApiProperty } from '@nestjs/swagger';
import { Inspection } from '@prisma/client';

export class InspectionEntity implements Inspection {
  constructor({ ...data }: Partial<InspectionEntity>) {
    Object.assign(this, data);
  }

  @ApiProperty({
    description: 'Unique identifier of the inspection',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Animal ID associated with the inspection',
    example: 10,
  })
  animalId: number;

  @ApiProperty({
    description: 'Disease ID associated with the inspection',
    example: 10,
  })
  diseaseId: number;

  @ApiProperty({ description: 'General inspection ID', example: 15 })
  generalInspectionId: number;

  @ApiProperty({
    description: 'Temperature of the animal during inspection',
    example: 38.5,
  })
  temperature: number;

  @ApiProperty({
    description: 'Pulse rate of the animal during inspection',
    example: 72,
  })
  pulse: number;

  @ApiProperty({
    description: 'Respiratory rate of the animal during inspection',
    example: 20,
  })
  respiratoryRate: number;

  @ApiProperty({ description: 'Rumination count of the animal', example: 5 })
  rumination: number;

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
