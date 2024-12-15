import { ApiProperty } from '@nestjs/swagger';
import { District } from '@prisma/client';

export class DistrictEntity implements District {
  constructor({ ...data }: Partial<DistrictEntity>) {
    Object.assign(this, data);
  }

  @ApiProperty({ description: 'Unique identifier of the district', example: 1 })
  id: number;

  @ApiProperty({
    description: 'Name of the district',
    example: 'Tashkent District',
  })
  name: string;

  @ApiProperty({
    description: 'Region identifier associated with the district',
    example: 2,
  })
  regionId: number;
}
