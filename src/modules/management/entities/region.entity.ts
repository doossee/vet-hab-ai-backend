import { ApiProperty } from '@nestjs/swagger';
import { Region } from '@prisma/client';

export class RegionEntity implements Region {
  constructor({ ...data }: Partial<RegionEntity>) {
    Object.assign(this, data);
  }

  @ApiProperty({ description: 'Unique identifier of the region', example: 1 })
  id: number;

  @ApiProperty({
    description: 'Name of the region',
    example: 'Tashkent Region',
  })
  name: string;
}
