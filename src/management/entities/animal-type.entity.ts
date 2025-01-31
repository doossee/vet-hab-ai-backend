import { ApiProperty } from '@nestjs/swagger';
import { AnimalType } from '@prisma/client';

export class AnimalTypeEntity implements AnimalType {
  constructor({ ...data }: Partial<AnimalTypeEntity>) {
    Object.assign(this, data);
  }

  @ApiProperty({
    description: 'Unique identifier of the animal type',
    example: 1,
  })
  id: number;

  @ApiProperty({ description: 'Name of the animal type', example: 'Cattle' })
  name: string;
}
