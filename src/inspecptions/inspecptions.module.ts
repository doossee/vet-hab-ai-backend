import { Module } from '@nestjs/common';
import {
  BloodSerumTestsController,
  DiseasesController,
  DungTestsController,
  GeneralBloodTestController,
  GeneralInspectionController,
  InspectionsController,
  RumenTestsController,
  UrineTestsController,
} from './controllers';
import {
  BloodSerumTestsService,
  DiseasesService,
  DungTestsService,
  GeneralBloodTestsService,
  GeneralInspectionsService,
  InspectionsService,
  RumenTestsService,
  UrineTestsService,
} from './services';

@Module({
  controllers: [
    GeneralInspectionController,
    InspectionsController,
    DiseasesController,
    GeneralBloodTestController,
    BloodSerumTestsController,
    UrineTestsController,
    DungTestsController,
    RumenTestsController,
  ],
  providers: [
    GeneralInspectionsService,
    InspectionsService,
    DiseasesService,
    GeneralBloodTestsService,
    BloodSerumTestsService,
    UrineTestsService,
    DungTestsService,
    RumenTestsService,
  ],
})
export class InspecptionsModule {}
