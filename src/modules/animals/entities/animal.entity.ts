import { ApiProperty } from '@nestjs/swagger';
import { $Enums, Animal } from '@prisma/client';

export class AnimalEntity implements Animal {
  constructor({ ...data }: Partial<AnimalEntity>) {
    Object.assign(this, data);
  }

  @ApiProperty({
    description: 'Name of the animal',
    example: 'Bella',
  })
  name: string;

  @ApiProperty({
    description: 'Unique identifier of the animal',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Unique identification code for the animal',
    example: 'A123456789',
  })
  idCode: string;

  @ApiProperty({
    description: 'The date the animal arrived',
    example: '2023-12-11T00:00:00Z',
    type: String,
    format: 'date-time',
  })
  arrivalDate: Date;

  @ApiProperty({
    description: 'ID of the farmer associated with the animal',
    example: 42,
  })
  farmerId: number;

  @ApiProperty({
    description: 'ID of the type of the animal',
    example: 5,
  })
  typeId: number;

  @ApiProperty({
    description: 'Gender of the animal',
    example: $Enums.Gender.MALE,
    enum: $Enums.Gender,
  })
  gender: $Enums.Gender;

  @ApiProperty({
    description: 'Breed of the animal',
    example: $Enums.Breed.MEAT,
    enum: $Enums.Breed,
  })
  breed: $Enums.Breed;

  @ApiProperty({
    description: 'Birth date of the animal',
    example: '2023-01-01T00:00:00Z',
    type: String,
    format: 'date-time',
  })
  birthDate: Date;

  @ApiProperty({
    description: 'Weight of the animal in kilograms',
    example: 150.5,
  })
  weight: number;

  @ApiProperty({
    description: 'Address where the animal is located',
    example: '123 Farm Street',
  })
  address: string;

  @ApiProperty({
    description: 'ID of the color associated with the animal',
    example: 3,
  })
  colorId: number;

  @ApiProperty({
    description: 'Date when the animal record was created',
    example: '2023-12-01T00:00:00Z',
    type: String,
    format: 'date-time',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Date when the animal record was last updated',
    example: '2023-12-10T00:00:00Z',
    type: String,
    format: 'date-time',
  })
  updatedAt: Date;
}
