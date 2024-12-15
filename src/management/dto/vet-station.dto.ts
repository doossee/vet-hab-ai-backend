import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsPositive, IsString } from 'class-validator';

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
  readonly districtId: number;
}
export class UpdateVetStationDto extends PartialType(CreateVetStationDto) {}
