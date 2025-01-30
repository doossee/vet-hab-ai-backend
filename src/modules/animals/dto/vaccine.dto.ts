import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsDate, IsInt, IsNotEmpty, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';
import { IsEntityExist } from 'src/common/validators';

export class CreateVaccineDto {
  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  @ApiProperty({
    description: 'The date when the vaccine was administered',
    example: '2023-12-11T00:00:00Z',
    type: String,
    format: 'date-time',
  })
  readonly date: Date;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @IsEntityExist('vaccineType', {
    message: 'Vaccine Type with given ID does not exist',
  })
  @ApiProperty({
    description: 'ID of the vaccine type',
    example: 2,
  })
  readonly typeId: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @IsEntityExist('animal', {
    message: 'Animal with given ID does not exist',
  })
  @ApiProperty({
    description: 'ID of the animal that received the vaccine',
    example: 10,
  })
  readonly animalId: number;
}

export class UpdateVaccineDto extends PartialType(CreateVaccineDto) {}
