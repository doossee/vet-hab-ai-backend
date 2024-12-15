import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDungColorDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;
}
export class UpdateDungColorDto extends PartialType(CreateDungColorDto) {}
