import { ApiProperty } from '@nestjs/swagger';
import { UrineColor } from '@prisma/client';

export class UrineColorEntity implements UrineColor {
  constructor({ ...data }: Partial<UrineColorEntity>) {
    Object.assign(this, data);
  }

  @ApiProperty({
    description: 'Unique identifier of the urine color',
    example: 1,
  })
  id: number;

  @ApiProperty({ description: 'Name of the urine color', example: 'Clear' })
  name: string;
}
