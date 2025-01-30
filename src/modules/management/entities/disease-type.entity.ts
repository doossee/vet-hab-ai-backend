import { ApiProperty } from '@nestjs/swagger';
import { DiseaseType } from '@prisma/client';

export class DiseaseTypeEntity implements DiseaseType {
  constructor({ ...data }: Partial<DiseaseTypeEntity>) {
    Object.assign(this, data);
  }
  @ApiProperty({
    description: 'Unique identifier of the disease type',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Name of the disease type',
    example: 'Foot-and-Mouth Disease',
  })
  name: string;
}
