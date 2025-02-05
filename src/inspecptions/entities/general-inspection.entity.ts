import { ApiProperty } from '@nestjs/swagger';
import { $Enums, GeneralInspection } from '@prisma/client';

export class GeneralInspectionEntity implements GeneralInspection {
  constructor({ ...data }: Partial<GeneralInspectionEntity>) {
    Object.assign(this, data);
  }

  @ApiProperty({
    description: 'Unique identifier of the general inspection',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Animal ID associated with the inspection',
    example: 101,
  })
  animalId: number;

  @ApiProperty({
    description: 'Body type of the animal',
    enum: $Enums.BodyType,
  })
  bodyType: $Enums.BodyType;

  @ApiProperty({
    description: 'Body structure of the animal',
    enum: $Enums.BodyStructure,
  })
  bodyStructure: $Enums.BodyStructure;

  @ApiProperty({
    description: 'Body position of the animal',
    enum: $Enums.BodyPosition,
  })
  bodyPosition: $Enums.BodyPosition;

  @ApiProperty({
    description: 'Obesity type of the animal',
    enum: $Enums.ObesityType,
  })
  obesity: $Enums.ObesityType;

  @ApiProperty({ description: 'Customer type', enum: $Enums.CharacterType })
  character: $Enums.CharacterType;

  @ApiProperty({ description: 'Leather cover ID of the animal', example: 5 })
  leatherCoverId: number;

  @ApiProperty({ description: 'Eyelid ID of the animal', example: 8 })
  eyelidId: number;

  @ApiProperty({ description: 'Color ID of the animal', example: 3 })
  colorId: number;

  @ApiProperty({
    description: 'Creation timestamp',
    example: '2023-12-11T00:00:00Z',
    type: String,
    format: 'date-time',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Last update timestamp',
    example: '2023-12-12T00:00:00Z',
    type: String,
    format: 'date-time',
  })
  updatedAt: Date;
}
