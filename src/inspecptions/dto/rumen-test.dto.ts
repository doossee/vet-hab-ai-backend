import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { IsEntityExist } from 'src/common/validators';

export class CreateRumenTestDto {
  @IsInt()
  @IsPositive()
  @IsOptional()
  @IsEntityExist('animal', {
    message: 'Animal with given ID does not exist',
  })
  @ApiProperty({
    description: 'The ID of the animal associated with the rumen test.',
    example: 101,
  })
  readonly animalId?: number;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @IsEntityExist('disease', {
    message: 'Disease with given ID does not exist',
  })
  @ApiProperty({
    description:
      'The ID of the disease associated with the rumen test, if applicable.',
    example: 5,
  })
  readonly diseaseId?: number;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The date when the rumen test was performed.',
    example: '2024-01-15T10:00:00Z',
  })
  readonly date: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Conclusion or notes from the rumen test.',
    example: 'Normal rumen function observed.',
  })
  readonly conclusion?: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description:
      'The quantity of infusoria in the rumen fluid (1000/ml). Parameter x16 for disease detection.',
    example: 250.5,
  })
  readonly infusoriaCount?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description:
      'The state/condition of the scar (rumen) fluid measured by rametr. Parameter x17 for disease detection.',
    example: 6.8,
  })
  readonly scarFluidState?: number;
}

export class UpdateRumenTestDto extends PartialType(CreateRumenTestDto) {}
