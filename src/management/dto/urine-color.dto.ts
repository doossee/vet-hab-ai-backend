import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUrineColorDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The name of the urine color',
    example: 'Yellow',
  })
  readonly name: string;
}
export class UpdateUrineColorDto extends PartialType(CreateUrineColorDto) {}
