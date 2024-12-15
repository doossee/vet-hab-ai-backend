import { ApiProperty } from '@nestjs/swagger';
import { Vaccine, VaccineType } from '@prisma/client';

export class VaccineEntity implements Vaccine {
  constructor({ ...data }: Partial<VaccineEntity>) {
    Object.assign(this, data);

    // if (type) {
    //   this.type = new VaccineTypeEntity(type);
    // }
  }
  @ApiProperty({
    description: 'Unique identifier of the vaccine',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Date when the vaccine was administered',
    example: '2023-12-11T00:00:00Z',
    type: String,
    format: 'date-time',
  })
  date: Date;

  @ApiProperty({
    description: 'ID of the vaccine type',
    example: 2,
  })
  typeId: number;

  // @ApiProperty({
  //   description: 'Details about the vaccine type, such as name or category',
  //   type: () => VaccineTypeEntity,
  // })
  // type: VaccineTypeEntity;

  @ApiProperty({
    description: 'ID of the animal that received the vaccine',
    example: 10,
  })
  animalId: number;

  @ApiProperty({
    description: 'Date when the vaccine record was created',
    example: '2023-12-01T00:00:00Z',
    type: String,
    format: 'date-time',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Date when the vaccine record was last updated',
    example: '2023-12-10T00:00:00Z',
    type: String,
    format: 'date-time',
  })
  updatedAt: Date;
}
