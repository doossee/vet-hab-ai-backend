import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEyelidDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The name of the eyelid',
    example: 'Example',
  })
  readonly name: string;
}
export class UpdateEyelidDto extends PartialType(CreateEyelidDto) {}
