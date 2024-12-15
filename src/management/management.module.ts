import { Module } from '@nestjs/common';
import {
  AnimalTypesService,
  ColorsService,
  DiseaseTypesService,
  DistrictsService,
  DungColorsService,
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

@Module({
  controllers: [
    RegionsController,
    DistrictsController,
    VetStationsController,
    AnimalTypesController,
    ColorsController,
    UrineColorsController,
    DungColorsController,
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
    VaccineTypesService,
    DiseaseTypesService,
  ],
})
export class ManagementModule {}
