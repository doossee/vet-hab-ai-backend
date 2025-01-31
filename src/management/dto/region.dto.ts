import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRegionDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The name of the region',
    example: 'North',
  })
  readonly name: string;
}
export class UpdateRegionDto extends PartialType(CreateRegionDto) {}
