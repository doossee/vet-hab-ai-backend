import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FarmersModule } from './farmers/farmers.module';
import { VetStationsModule } from './vet-stations/vet-stations.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { VeterinariansModule } from './veterinarians/veterinarians.module';

@Module({
  imports: [FarmersModule, UsersModule, AuthModule, VeterinariansModule, VetStationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
