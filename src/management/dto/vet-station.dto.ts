import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsPositive, IsString } from 'class-validator';
import { IsEntityExist } from 'src/common/validators';

export class CreateVetStationDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly address: string;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  @IsEntityExist('district', {
    message: 'District with given ID does not exist',
  })
  readonly districtId: number;
}
export class UpdateVetStationDto extends PartialType(CreateVetStationDto) {}
