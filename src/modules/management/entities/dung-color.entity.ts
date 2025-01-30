import { ApiProperty } from '@nestjs/swagger';
import { DungColor } from '@prisma/client';

export class DungColorEntity implements DungColor {
  constructor({ ...data }: Partial<DungColorEntity>) {
    Object.assign(this, data);
  }

  @ApiProperty({
    description: 'Unique identifier of the stool color',
    example: 1,
  })
  id: number;

  @ApiProperty({ description: 'Name of the stool color', example: 'Yellow' })
  name: string;
}
