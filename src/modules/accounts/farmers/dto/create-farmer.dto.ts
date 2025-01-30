import { ApiProperty } from '@nestjs/swagger';
import { Gender } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsString,
  IsPhoneNumber,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsOptional,
  IsEnum,
  IsDate,
  IsInt,
  IsPositive,
} from 'class-validator';
import { IsEntityExist } from 'src/common/validators';

export class CreateFarmerDto {
  @IsString()
  @IsPhoneNumber('UZ', { message: 'Phone number must be in the Uzbek format' })
  @IsNotEmpty()
  @ApiProperty({
    description: "The user's phone number in international format",
    example: '+998901234566',
  })
  readonly phone: string;

  @IsString()
  @MinLength(5, { message: 'Password must be at least 6 characters long' })
  @IsNotEmpty()
  @ApiProperty({
    description: "The user's password (hashed)",
    example: 'hashed_password_string',
  })
  readonly password: string;

  @IsString()
  @MinLength(0, { message: 'First name must be at least 1 character long' })
  @MaxLength(254, { message: 'First name must not exceed 255 characters' })
  @IsNotEmpty()
  @ApiProperty({
    description: "The user's first name",
    example: 'John',
  })
  readonly firstName: string;

  @IsString()
  @MinLength(0, { message: 'Last name must be at least 1 character long' })
  @MaxLength(254, { message: 'Last name must not exceed 255 characters' })
  @IsNotEmpty()
  @ApiProperty({
    description: "The user's last name",
    example: 'Doe',
  })
  readonly lastName: string;

  @IsString()
  @MaxLength(254, { message: 'Middle name must not exceed 255 characters' })
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
    example: '1999-01-01',
    required: false,
    nullable: true,
  })
  readonly birthDate?: Date | string | null;

  @IsInt()
  @IsPositive({ message: 'District ID must be a positive integer' })
  @IsNotEmpty()
  @IsEntityExist('district', {
    message: 'District with given ID does not exist',
  })
  @ApiProperty({
    description: "The identifier of the user's district",
    example: 100,
  })
  readonly districtId: number;

  @IsString()
  @MaxLength(254, { message: 'Address must not exceed 255 characters' })
  @IsOptional()
  @ApiProperty({
    description: "The user's residential address",
    example: '122 Main St, Springfield',
    required: false,
    nullable: true,
  })
  readonly address?: string | null;

  @IsInt()
  @IsPositive({ message: 'District ID must be a positive integer' })
  @IsNotEmpty()
  @IsEntityExist('veterinarian', 'userPtrId', {
    message: 'Veterinarian with given ID does not exist',
  })
  @ApiProperty({
    description: "The identifier of the user's district",
    example: 9,
  })
  readonly veterinarianId: number;
}
