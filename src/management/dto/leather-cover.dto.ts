import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLeatherCoverDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The name of the leather cover',
    example: 'Example',
  })
  readonly name: string;
}
export class UpdateLeatherCoverDto extends PartialType(CreateLeatherCoverDto) {}
