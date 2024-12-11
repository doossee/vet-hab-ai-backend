import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Gender, UserRole } from '@prisma/client';
import { VeterinariansService } from '../services/veterinarians.service';

export class CreateVeterinarianDto {
  @IsString()
  @IsPhoneNumber('UZ', { message: 'Phone number must be in the Uzbek format' })
  @IsNotEmpty()
  @ApiProperty({
    description: "The user's phone number in international format",
    example: '+998901234567',
  })
  readonly phone: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @IsNotEmpty()
  @ApiProperty({
    description: "The user's password (hashed)",
    example: 'hashed_password_string',
  })
  readonly password: string;

  @IsString()
  @MinLength(1, { message: 'First name must be at least 1 character long' })
  @MaxLength(255, { message: 'First name must not exceed 255 characters' })
  @IsNotEmpty()
  @ApiProperty({
    description: "The user's first name",
    example: 'John',
  })
  readonly firstName: string;

  @IsString()
  @MinLength(1, { message: 'Last name must be at least 1 character long' })
  @MaxLength(255, { message: 'Last name must not exceed 255 characters' })
  @IsNotEmpty()
  @ApiProperty({
    description: "The user's last name",
    example: 'Doe',
  })
  readonly lastName: string;

  @IsString()
  @MaxLength(255, { message: 'Middle name must not exceed 255 characters' })
  @IsOptional()
  @ApiProperty({
    description: "The user's middle name",
    example: 'Smith',
    required: false,
    nullable: true,
  })
  readonly middleName?: string | null;

  @IsEnum(Gender, {
    message: 'Gender must be one of the predefined enum values',
  })
  @IsOptional()
  @ApiProperty({
    description: "The user's gender",
    enum: Gender,
    required: false,
    nullable: true,
    example: Gender.MALE,
  })
  readonly gender?: Gender | null;

  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @ApiProperty({
    description: "The user's birthdate",
    example: '2000-01-01',
    required: false,
    nullable: true,
  })
  readonly birthdate?: Date | string | null;

  @IsInt()
  @IsPositive({ message: 'District ID must be a positive integer' })
  @IsNotEmpty()
  @ApiProperty({
    description: "The identifier of the user's district",
    example: 101,
  })
  readonly districtId: number;

  @IsString()
  @MaxLength(255, { message: 'Address must not exceed 255 characters' })
  @IsOptional()
  @ApiProperty({
    description: "The user's residential address",
    example: '123 Main St, Springfield',
    required: false,
    nullable: true,
  })
  readonly address?: string | null;
}

export class UpdateVeterinarianDto extends PartialType(CreateVeterinarianDto) {}
