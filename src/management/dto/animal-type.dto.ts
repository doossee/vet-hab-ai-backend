import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAnimalTypeDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;
}
export class UpdateAnimalTypeDto extends PartialType(CreateAnimalTypeDto) {}
