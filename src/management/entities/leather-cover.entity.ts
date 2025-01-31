import { ApiProperty } from '@nestjs/swagger';
import { LeatherCover } from '@prisma/client';

export class LeatherCoverEntity implements LeatherCover {
  constructor({ ...data }: Partial<LeatherCoverEntity>) {
    Object.assign(this, data);
  }

  @ApiProperty({
    description: 'Unique identifier of the stool color',
    example: 1,
  })
  id: number;

  @ApiProperty({ description: 'Name of the leather cover', example: 'Example' })
  name: string;
}

