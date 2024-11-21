import { PartialType } from '@nestjs/mapped-types';
import { CreateVetStationDto } from './create-vet-station.dto';

export class UpdateVetStationDto extends PartialType(CreateVetStationDto) {}
