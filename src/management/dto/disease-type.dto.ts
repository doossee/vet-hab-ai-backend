import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDiseaseTypeDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;
}
export class UpdateDiseaseTypeDto extends PartialType(CreateDiseaseTypeDto) {}
