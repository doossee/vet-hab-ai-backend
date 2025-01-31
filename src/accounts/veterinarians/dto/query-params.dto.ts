import { UserRole } from '@prisma/client';
import { SortOrder } from 'src/common/dto';
import { UserQueryParamsDto } from '../../users/dto';

export class VeterinarianQueryParamsDto extends UserQueryParamsDto {
  readonly role?: UserRole = null;
  readonly byRole?: SortOrder = null;
}
