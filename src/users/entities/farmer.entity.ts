import { Farmer } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from './user.entity';
import { VeterinarianEntity } from './veterinarian.entity';

export class FarmerEntity implements Farmer {
  constructor({ user, veterinarian, ...data }: Partial<FarmerEntity>) {
    Object.assign(this, data);

    if (user) {
      this.user = new UserEntity(user);
    }

    if (veterinarian) {
      this.veterinarian = new VeterinarianEntity(veterinarian);
    }
  }

  @ApiProperty({
    description: 'Unique identifier of the farmer that points to user',
    example: 1,
  })
  userPtrId: number;

  @ApiProperty({
    description: 'User data associated with the farmer',
    type: () => UserEntity,
  })
  user: UserEntity;

  @ApiProperty({
    description: 'Veterinarian ID associated with the farmer',
    example: 15,
  })
  veterinarianId: number;

  @ApiProperty({
    description: 'Veterinarian data associated with the farmer',
    type: () => VeterinarianEntity,
  })
  veterinarian: VeterinarianEntity;
}
