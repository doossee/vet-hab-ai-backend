import { ApiProperty } from '@nestjs/swagger';
import { Breed, Color } from '@prisma/client';

export class BreedEntity implements Breed {
  constructor({ ...data }: Partial<BreedEntity>) {
    Object.assign(this, data);
  }

  @ApiProperty({ description: 'Unique identifier of the color', example: 1 })
  id: number;

  @ApiProperty({ description: 'Name of the color', example: 'Brown' })
  name: string;

  @ApiProperty({
    description: 'ID of the parent breed',
    example: 1,
    required: false,
  })
  parentId: number;
}
