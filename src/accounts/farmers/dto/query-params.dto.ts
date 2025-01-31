import { ApiProperty } from "@nestjs/swagger";
import { UserRole } from "@prisma/client";
import { IsInt, IsPositive, IsOptional, IsEnum } from "class-validator";
import { SortOrder } from "src/common/dto";
import { UserQueryParamsDto } from "../../users/dto";

export class FarmerQueryParamsDto extends UserQueryParamsDto {
  readonly role?: UserRole = null;
  readonly byRole?: SortOrder = null;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'Filter by veterinarian ID',
    example: 15,
    required: false,
  })
  readonly veterinarianId?: number;

  @IsEnum(SortOrder)
  @IsOptional()
  @ApiProperty({
    description: 'Sort by veterinarian ID (ASC or DESC)',
    enum: SortOrder,
    required: false,
  })
  readonly byVeterinarianId?: number;
}
