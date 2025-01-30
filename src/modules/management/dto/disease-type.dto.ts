import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDiseaseTypeDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The name of the disease type',
    example: 'Flu',
  })
  readonly name: string;
}
export class UpdateDiseaseTypeDto extends PartialType(CreateDiseaseTypeDto) {}
