import { Module } from '@nestjs/common';
import {
  BloodSerumTestsController,
  DiseasesController,
  DungTestsController,
  GeneralBloodTestController,
  GeneralInspectionController,
  InspectionsController,
  UrineTestsController,
} from './controllers';
import {
  BloodSerumTestsService,
  DiseasesService,
  DungTestsService,
  GeneralBloodTestsService,
  GeneralInspectionsService,
  InspectionsService,
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
  ],
  providers: [
    GeneralInspectionsService,
    InspectionsService,
    DiseasesService,
    GeneralBloodTestsService,
    BloodSerumTestsService,
    UrineTestsService,
    DungTestsService,
  ],
})
export class InspecptionsModule {}
