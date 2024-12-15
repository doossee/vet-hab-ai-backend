import { ApiProperty } from '@nestjs/swagger';
import { VetStation } from '@prisma/client';

export class VetStationEntity implements VetStation {
  constructor({ ...data }: Partial<VetStationEntity>) {
    Object.assign(this, data);
  }

  @ApiProperty({
    description: 'Unique identifier of the veterinary station',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Name of the veterinary station',
    example: 'Central Vet Station',
  })
  name: string;

  @ApiProperty({
    description: 'Address of the veterinary station',
    example: '123 Vet Street, Tashkent',
  })
  address: string;

  @ApiProperty({
    description: 'District identifier associated with the veterinary station',
    example: 2,
  })
  districtId: number;

  @ApiProperty({
    description: 'Timestamp when the record was created',
    example: '2023-12-01T00:00:00Z',
    type: String,
    format: 'date-time',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Timestamp when the record was last updated',
    example: '2023-12-10T00:00:00Z',
    type: String,
    format: 'date-time',
  })
  updatedAt: Date;
}
