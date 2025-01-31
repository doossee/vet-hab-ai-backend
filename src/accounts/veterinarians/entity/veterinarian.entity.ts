import { Veterinarian } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '../../users/entity';

export class VeterinarianEntity implements Veterinarian {
  constructor({ user, ...data }: Partial<VeterinarianEntity>) {
    Object.assign(this, data);

    if (user) {
      this.user = new UserEntity(user);
    }
  }

  @ApiProperty({
    description: 'Unique identifier of the veterinarian that points to user',
    example: -2,
  })
  userPtrId: number;

  @ApiProperty({
    description: 'User data associated with the veterinarian',
    type: () => UserEntity,
  })
  user: UserEntity;
}
