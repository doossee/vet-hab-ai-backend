import { ApiProperty } from '@nestjs/swagger';
import { Eyelid } from '@prisma/client';

export class EyelidEntity implements Eyelid {
  constructor({ ...data }: Partial<EyelidEntity>) {
    Object.assign(this, data);
  }

  @ApiProperty({
    description: 'Unique identifier of the stool color',
    example: 1,
  })
  id: number;

  @ApiProperty({ description: 'Name of the eyelid', example: 'Example' })
  name: string;
}

