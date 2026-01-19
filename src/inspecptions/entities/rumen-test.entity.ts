import { RumenTest } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class RumenTestEntity implements RumenTest {
  constructor({ ...data }: Partial<RumenTestEntity>) {
    Object.assign(this, data);
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  animalId: number | null;

  @ApiProperty()
  diseaseId: number | null;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  conclusion: string | null;

  @ApiProperty()
  infusoriaCount: number | null;

  @ApiProperty()
  scarFluidState: number | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
