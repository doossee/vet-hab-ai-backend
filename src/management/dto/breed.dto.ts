import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsOptional,
  IsPositive,
} from 'class-validator';
import { IsEntityExist } from 'src/common/validators';

export class CreateBreedDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The name of the breed',
    example: 'Angus',
  })
  name: string;

  @IsInt()
  @IsOptional()
  @IsPositive()
  @IsEntityExist('breed', {
    message: 'Parent breed with given ID does not exist',
  })
  @ApiProperty({
    description: 'The ID of the parent breed',
    example: 1,
    required: false,
  })
  parentId?: number;
}

export class UpdateBreedDto extends PartialType(CreateBreedDto) {}
