import { ApiProperty } from '@nestjs/swagger';
import { $Enums } from '@prisma/client';

export class UserEntity {
  @ApiProperty({
    description: 'Unique identifier of the user',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'User\'s phone number',
    example: '+1234567890',
  })
  phone: string;

  @ApiProperty({
    description: 'Hashed password of the user',
    example: 'hashed_password_string',
  })
  password: string;

  @ApiProperty({
    description: 'Refresh token assigned to the user',
    example: 'refresh_token_string',
    required: false,
  })
  refreshToken: string;

  @ApiProperty({
    description: 'First name of the user',
    example: 'John',
  })
  firstName: string;

  @ApiProperty({
    description: 'Last name of the user',
    example: 'Doe',
  })
  lastName: string;

  @ApiProperty({
    description: 'Middle name of the user',
    example: 'Smith',
    required: false,
  })
  middleName: string;

  @ApiProperty({
    description: 'Gender of the user',
    enum: $Enums.Gender,
    example: $Enums.Gender.MALE,
  })
  gender: $Enums.Gender;

  @ApiProperty({
    description: 'User\'s birthdate',
    type: String,
    example: '2000-01-01',
  })
  birthdate: Date;

  @ApiProperty({
    description: 'District identifier associated with the user',
    example: 101,
  })
  districtId: number;

  @ApiProperty({
    description: 'Residential address of the user',
    example: '123 Main St, Springfield',
  })
  address: string;

  @ApiProperty({
    description: 'User\'s role in the system',
    enum: $Enums.UserRole,
    example: $Enums.UserRole.ADMIN,
  })
  role: $Enums.UserRole;

  @ApiProperty({
    description: 'Record creation timestamp',
    type: String,
    example: '2024-01-01T00:00:00.000Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Record last update timestamp',
    type: String,
    example: '2024-01-10T00:00:00.000Z',
  })
  updatedAt: Date;
}
