import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateVaccineTypeDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The name of the vaccine type',
    example: 'Flu Vaccine',
  })
  readonly name: string;
}
export class UpdateVaccineTypeDto extends PartialType(CreateVaccineTypeDto) {}
