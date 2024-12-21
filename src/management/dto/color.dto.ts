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
  @ApiProperty({
    description: 'The name of the color',
    example: 'Red',
  })
  readonly name: string;

  @IsString()
  @MinLength(7)
  @MaxLength(7)
  @IsOptional()
  @ApiProperty({
    description: 'The hex code of the color',
    example: '#FF0000',
  })
  readonly hex: string;
}
export class UpdateColorDto extends PartialType(CreateColorDto) {}
