import { Module } from '@nestjs/common';
import {
  AnimalTypesService,
  BreedsService,
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
import { BreedsController } from './controllers/breeds.controller';

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
    BreedsController,
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
    BreedsService,
  ],
})
export class ManagementModule {}
