import { ApiProperty } from '@nestjs/swagger';
import { RegionEntity } from './region.entity';
import { MetaDateEntity } from 'src/common/pagination';
import { DistrictEntity } from './district.entity';
import { VetStationEntity } from './vet-station.entity';
import { AnimalTypeEntity } from './animal-type.entity';
import { ColorEntity } from './color.entity';
import { UrineColorEntity } from './urine-color.entity';
import { DungColorEntity } from './dung-color.entity';
import { VaccineTypeEntity } from './vaccine-type.entity';
import { DiseaseTypeEntity } from './disease-type.entity';
import { LeatherCoverEntity } from './leather-cover.entity';
import { EyelidEntity } from './eyelid.entity';
import { BreedEntity } from './breed.entity';

export class PaginatedRegionsEntity {
  @ApiProperty({ type: [RegionEntity] })
  data: RegionEntity[];

  @ApiProperty({ type: MetaDateEntity })
  meta: MetaDateEntity;
}

export class PaginatedDistrictsEntity {
  @ApiProperty({ type: [DistrictEntity] })
  data: DistrictEntity[];

  @ApiProperty({ type: MetaDateEntity })
  meta: MetaDateEntity;
}

export class PaginatedVetStationsEntity {
  @ApiProperty({ type: [VetStationEntity] })
  data: VetStationEntity[];

  @ApiProperty({ type: MetaDateEntity })
  meta: MetaDateEntity;
}

export class PaginatedAnimalTypesEntity {
  @ApiProperty({ type: [AnimalTypeEntity] })
  data: AnimalTypeEntity[];

  @ApiProperty({ type: MetaDateEntity })
  meta: MetaDateEntity;
}

export class PaginatedColorsEntity {
  @ApiProperty({ type: [ColorEntity] })
  data: ColorEntity[];

  @ApiProperty({ type: MetaDateEntity })
  meta: MetaDateEntity;
}

export class PaginatedUrineColorsEntity {
  @ApiProperty({ type: [UrineColorEntity] })
  data: UrineColorEntity[];

  @ApiProperty({ type: MetaDateEntity })
  meta: MetaDateEntity;
}

export class PaginatedDungColorsEntity {
  @ApiProperty({ type: [DungColorEntity] })
  data: DungColorEntity[];

  @ApiProperty({ type: MetaDateEntity })
  meta: MetaDateEntity;
}

export class PaginatedVaccineTypesEntity {
  @ApiProperty({ type: [VaccineTypeEntity] })
  data: VaccineTypeEntity[];

  @ApiProperty({ type: MetaDateEntity })
  meta: MetaDateEntity;
}

export class PaginatedDiseaseTypesEntity {
  @ApiProperty({ type: [DiseaseTypeEntity] })
  data: DiseaseTypeEntity[];

  @ApiProperty({ type: MetaDateEntity })
  meta: MetaDateEntity;
}

export class PaginatedLeatherCoversEntity {
  @ApiProperty({ type: [LeatherCoverEntity] })
  data: LeatherCoverEntity[];

  @ApiProperty({ type: MetaDateEntity })
  meta: MetaDateEntity;
}

export class PaginatedEyelidsEntity {
  @ApiProperty({ type: [EyelidEntity] })
  data: EyelidEntity[];

  @ApiProperty({ type: MetaDateEntity })
  meta: MetaDateEntity;
}

export class PaginatedBreedsEntity {
  @ApiProperty({ type: [BreedEntity] })
  data: BreedEntity[];

  @ApiProperty({ type: MetaDateEntity })
  meta: MetaDateEntity;
}
