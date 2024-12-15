import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsDate, IsInt, IsNotEmpty, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateVaccineDto {
  @ApiProperty({
    description: 'The date when the vaccine was administered',
    example: '2023-12-11T00:00:00Z',
    type: String,
    format: 'date-time',
  })
  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  readonly date: Date;

  @ApiProperty({
    description: 'ID of the vaccine type',
    example: 2,
  })
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  readonly typeId: number;

  @ApiProperty({
    description: 'ID of the animal that received the vaccine',
    example: 10,
  })
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  readonly animalId: number;
}

export class UpdateVaccineDto extends PartialType(CreateVaccineDto) {}
