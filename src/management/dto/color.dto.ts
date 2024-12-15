import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  maxLength,
  MinLength,
} from 'class-validator';

export class CreateColorDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @MinLength(7)
  @MaxLength(7)
  @IsOptional()
  @ApiProperty()
  readonly hex: string;
}
export class UpdateColorDto extends PartialType(CreateColorDto) {}
