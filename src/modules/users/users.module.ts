import { Module } from '@nestjs/common';
import {
  UsersController,
  VeterinariansController,
  FarmersController,
} from './controllers';
import { UsersService, VeterinariansService, FarmersService } from './services';

@Module({
  controllers: [UsersController, VeterinariansController, FarmersController],
  providers: [UsersService, VeterinariansService, FarmersService],
})
export class UsersModule {}
