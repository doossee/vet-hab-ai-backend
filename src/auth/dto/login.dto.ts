import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsPhoneNumber,
  MinLength,
} from 'class-validator';

export class LoginDto {
  @IsPhoneNumber('UZ')
  @IsNotEmpty()
  @ApiProperty({ example: '+998901234567' })
  readonly phone: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty({ example: '123qazwsx' })
  readonly password: string;
}
