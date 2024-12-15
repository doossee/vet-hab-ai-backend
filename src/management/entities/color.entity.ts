import { ApiProperty } from '@nestjs/swagger';
import { Color } from '@prisma/client';

export class ColorEntity implements Color {
  constructor({ ...data }: Partial<ColorEntity>) {
    Object.assign(this, data);
  }

  @ApiProperty({ description: 'Unique identifier of the color', example: 1 })
  id: number;

  @ApiProperty({ description: 'Name of the color', example: 'Brown' })
  name: string;

  @ApiProperty({
    description: 'Hex code representing the color',
    example: '#A52A2A',
  })
  hex: string;
}
