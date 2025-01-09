import { BaseQueryParamsDto } from 'src/common/dto';

export class GeneralInspectionQueryParamsDto extends BaseQueryParamsDto {
  search?: string = null;
}
export class InspectionQueryParamsDto extends BaseQueryParamsDto {
  search?: string = null;
}
export class DiseaseQueryParamsDto extends BaseQueryParamsDto {
  search?: string = null;
}
export class GeneralBloodTestQueryParamsDto extends BaseQueryParamsDto {
  search?: string = null;
}
export class BloodSerumTestQueryParamsDto extends BaseQueryParamsDto {
  search?: string = null;
}
export class UrineTestQueryParamsDto extends BaseQueryParamsDto {
  search?: string = null;
}
export class DungTestQueryParamsDto extends BaseQueryParamsDto {
  search?: string = null;
}
