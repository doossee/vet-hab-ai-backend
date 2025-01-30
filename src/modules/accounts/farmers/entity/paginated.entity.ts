import { ApiProperty } from '@nestjs/swagger';
import { MetaDateEntity } from 'src/common/pagination';
import { FarmerEntity } from './farmer.entity';

export class PaginatedFarmersEntity {
  @ApiProperty({ type: [FarmerEntity] })
  data: FarmerEntity[];

  @ApiProperty({ type: MetaDateEntity })
  meta: MetaDateEntity;
}
