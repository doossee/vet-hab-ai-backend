import { ApiProperty } from '@nestjs/swagger';
import { MetaDateEntity } from 'src/common/pagination/meta-data.entity';
import { UserEntity } from './user.entity';
import { VeterinarianEntity } from './veterinarian.entity';
import { FarmerEntity } from './farmer.entity';

export class PaginatedUsersEntity {
  @ApiProperty({ type: [UserEntity] })
  data: UserEntity[];

  @ApiProperty({ type: MetaDateEntity })
  meta: MetaDateEntity;
}

export class PaginatedVeterinariansEntity {
  @ApiProperty({ type: [VeterinarianEntity] })
  data: VeterinarianEntity[];

  @ApiProperty({ type: MetaDateEntity })
  meta: MetaDateEntity;
}

export class PaginatedFarmersEntity {
  @ApiProperty({ type: [FarmerEntity] })
  data: FarmerEntity[];

  @ApiProperty({ type: MetaDateEntity })
  meta: MetaDateEntity;
}
