import { $Enums, DungTest } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class DungTestEntity implements DungTest {
  constructor({ ...data }: Partial<DungTestEntity>) {
    Object.assign(this, data);
  }

  @ApiProperty({
    description: 'Unique identifier for the dung test.',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'The ID of the animal the dung test is associated with.',
    example: 101,
  })
  animalId: number;

  @ApiProperty({
    description: 'The ID of the disease associated with this test.',
    example: 202,
  })
  diseaseId: number;

  @ApiProperty({
    description: 'The ID representing the color of the dung.',
    example: 3,
  })
  colorId: number;

  @ApiProperty({
    description: 'The clarity of the dung sample.',
    enum: $Enums.DungClarity,
    example: $Enums.DungClarity.CLEAR,
  })
  clarity: $Enums.DungClarity;

  @ApiProperty({
    description: 'The smell type of the dung.',
    enum: $Enums.SmellType,
    example: $Enums.SmellType.HAS,
  })
  smell: $Enums.SmellType;

  @ApiProperty({
    description: 'The form of the dung (e.g., solid, semi-solid, or liquid).',
    enum: $Enums.DungForm,
    example: $Enums.DungForm.SOLID,
  })
  form: $Enums.DungForm;

  @ApiProperty({
    description: 'The consistency level of the dung.',
    example: 5,
  })
  consistency: number;

  @ApiProperty({
    description: 'The number of worms detected in the dung sample.',
    example: 2,
  })
  worms: number;

  @ApiProperty({
    description: 'The date and time when the dung test was created.',
    example: '2024-12-14T09:15:30Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'The date and time when the dung test was last updated.',
    example: '2024-12-14T10:00:00Z',
  })
  updatedAt: Date;
}
