import { ApiProperty } from '@nestjs/swagger';
import { Disease } from '@prisma/client';

export class DiseaseEntity implements Disease {
  constructor({ ...data }: Partial<DiseaseEntity>) {
    Object.assign(this, data);
  }

  @ApiProperty({ description: 'Unique identifier of the disease', example: 1 })
  id: number;

  @ApiProperty({
    description: 'Animal ID associated with the disease',
    example: 101,
  })
  animalId: number;

  @ApiProperty({ description: 'Disease type ID', example: 2 })
  typeId: number;

  @ApiProperty({
    description: 'Start time of the disease',
    example: '2023-12-01T00:00:00Z',
    type: String,
    format: 'date-time',
  })
  startTime: Date;

  @ApiProperty({
    description: 'End time of the disease',
    example: '2023-12-10T00:00:00Z',
    type: String,
    format: 'date-time',
  })
  endTime: Date;

  @ApiProperty({
    description: 'Conclusion or remarks about the disease',
    example: 'Recovered fully',
  })
  conclusion: string;
}
