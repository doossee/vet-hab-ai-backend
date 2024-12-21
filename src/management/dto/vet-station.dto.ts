import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsPositive, IsString } from 'class-validator';
import { IsEntityExist } from 'src/common/validators';

export class CreateVetStationDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The name of the vet station',
    example: 'Downtown Vet Station',
  })
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The address of the vet station',
    example: '123 Main St',
  })
  readonly address: string;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The ID of the district',
    example: 1,
  })
  @IsEntityExist('district', {
    message: 'District with given ID does not exist',
  })
  readonly districtId: number;
}
export class UpdateVetStationDto extends PartialType(CreateVetStationDto) {}