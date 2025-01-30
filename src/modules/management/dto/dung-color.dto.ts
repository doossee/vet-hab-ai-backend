import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDungColorDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The name of the dung color',
    example: 'Brown',
  })
  readonly name: string;
}
export class UpdateDungColorDto extends PartialType(CreateDungColorDto) {}
