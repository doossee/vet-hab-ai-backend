import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsPositive, IsString } from 'class-validator';
import { IsEntityExist } from 'src/common/validators';

export class CreateDistrictDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The name of the district',
    example: 'Downtown',
  })
  readonly name: string;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @IsEntityExist('region', {
    message: 'Region with given ID does not exist',
  })
  @ApiProperty({
    description: 'The ID of the region',
    example: 1,
  })
  readonly regionId: number;
}
export class UpdateDistrictDto extends PartialType(CreateDistrictDto) {}
