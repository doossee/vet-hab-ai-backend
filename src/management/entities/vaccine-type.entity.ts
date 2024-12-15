import { ApiProperty } from '@nestjs/swagger';
import { VaccineType } from '@prisma/client';

export class VaccineTypeEntity implements VaccineType {
  constructor({ ...data }: Partial<VaccineTypeEntity>) {
    Object.assign(this, data);
  }

  @ApiProperty({
    description: 'Unique identifier of the vaccine type',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Name of the vaccine type',
    example: 'Rabies Vaccine',
  })
  name: string;
}
