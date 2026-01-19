import { MetaDateEntity } from 'src/common/pagination';
import { GeneralInspectionEntity } from './general-inspection.entity';
import { ApiProperty } from '@nestjs/swagger';
import { InspectionEntity } from './inspecption.entity';
import { DiseaseEntity } from './disease.entity';
import { GeneralBloodTestEntity } from './general-blood-test.entity';
import { BloodSerumTestEntity } from './blood-serum-test.entity';
import { UrineTestEntity } from './urine-test.entity';
import { DungTestEntity } from './dung-test.entity';
import { RumenTestEntity } from './rumen-test.entity';

export class PaginatedGeneralInspectionEntity {
  @ApiProperty({ type: [GeneralInspectionEntity] })
  data: GeneralInspectionEntity[];

  @ApiProperty({ type: MetaDateEntity })
  meta: MetaDateEntity;
}

export class PaginatedInspectionEntity {
  @ApiProperty({ type: [InspectionEntity] })
  data: InspectionEntity[];

  @ApiProperty({ type: MetaDateEntity })
  meta: MetaDateEntity;
}

export class PaginatedDiseaseEntity {
  @ApiProperty({ type: [DiseaseEntity] })
  data: DiseaseEntity[];

  @ApiProperty({ type: MetaDateEntity })
  meta: MetaDateEntity;
}

export class PaginatedGeneralBloodTestEntity {
  @ApiProperty({ type: [GeneralBloodTestEntity] })
  data: GeneralBloodTestEntity[];

  @ApiProperty({ type: MetaDateEntity })
  meta: MetaDateEntity;
}

export class PaginatedBloodSerumTestEntity {
  @ApiProperty({ type: [BloodSerumTestEntity] })
  data: BloodSerumTestEntity[];

  @ApiProperty({ type: MetaDateEntity })
  meta: MetaDateEntity;
}

export class PaginatedUrineTestEntity {
  @ApiProperty({ type: [UrineTestEntity] })
  data: UrineTestEntity[];

  @ApiProperty({ type: MetaDateEntity })
  meta: MetaDateEntity;
}

export class PaginatedDungTestEntity {
  @ApiProperty({ type: [DungTestEntity] })
  data: DungTestEntity[];

  @ApiProperty({ type: MetaDateEntity })
  meta: MetaDateEntity;
}

export class PaginatedRumenTestEntity {
  @ApiProperty({ type: [RumenTestEntity] })
  data: RumenTestEntity[];

  @ApiProperty({ type: MetaDateEntity })
  meta: MetaDateEntity;
}
