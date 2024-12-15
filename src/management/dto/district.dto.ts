import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class CreateDistrictDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  readonly regionId: number;
}
export class UpdateDistrictDto extends PartialType(CreateDistrictDto) {}
