import { Module } from '@nestjs/common';
import {
  AnimalTypesService,
  ColorsService,
  DiseaseTypesService,
  DistrictsService,
  DungColorsService,
  EyelidsService,
  LeatherCoversService,
  RegionsService,
  UrineColorsService,
  VaccineTypesService,
  VetStationsService,
} from './services';
import {
  AnimalTypesController,
  ColorsController,
  DiseaseTypesController,
  DistrictsController,
  DungColorsController,
  RegionsController,
  UrineColorsController,
  VaccineTypesController,
  VetStationsController,
} from './controllers';
import { EyelidsController } from './controllers/eyelids.controller';
import { LeatherCoversController } from './controllers/leather-covers.controller';

@Module({
  controllers: [
    RegionsController,
    DistrictsController,
    VetStationsController,
    AnimalTypesController,
    ColorsController,
    UrineColorsController,
    DungColorsController,
    LeatherCoversController,
    EyelidsController,
    VaccineTypesController,
    DiseaseTypesController,
  ],
  providers: [
    RegionsService,
    DistrictsService,
    VetStationsService,
    AnimalTypesService,
    ColorsService,
    UrineColorsService,
    DungColorsService,
    LeatherCoversService,
    EyelidsService,
    VaccineTypesService,
    DiseaseTypesService,
  ],
})
export class ManagementModule {}
