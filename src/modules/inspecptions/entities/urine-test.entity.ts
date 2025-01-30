import { $Enums, UrineTest } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UrineTestEntity implements UrineTest {
  constructor({ ...data }: Partial<UrineTestEntity>) {
    Object.assign(this, data);
  }

  @ApiProperty({
    description: 'Unique identifier for the urine test.',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'The ID of the animal the test belongs to.',
    example: 101,
  })
  animalId: number;

  @ApiProperty({
    description: 'The ID of the disease associated with this test.',
    example: 202,
  })
  diseaseId: number;

  @ApiProperty({
    description: 'The ID representing the color of the urine.',
    example: 3,
  })
  colorId: number;

  @ApiProperty({
    description: 'The clarity level of the urine.',
    enum: $Enums.UrineClarity,
    example: $Enums.UrineClarity.CLEAR,
  })
  clarity: $Enums.UrineClarity;

  @ApiProperty({
    description: 'Consistency level of the urine.',
    example: 5,
  })
  consistency: number;

  @ApiProperty({
    description: 'The smell type of the urine.',
    enum: $Enums.SmellType,
    example: $Enums.SmellType.HAS,
  })
  smell: $Enums.SmellType;

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
