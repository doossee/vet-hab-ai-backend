import { PartialType } from '@nestjs/swagger';
import { CreateInspecptionDto } from './create-inspecption.dto';

export class UpdateInspecptionDto extends PartialType(CreateInspecptionDto) {}
