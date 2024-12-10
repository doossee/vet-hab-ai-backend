import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FarmersModule } from './farmers/farmers.module';
import { VetStationsModule } from './vet-stations/vet-stations.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { VeterinariansModule } from './veterinarians/veterinarians.module';
import { ConfigModule } from '@nestjs/config';
import { loggingMiddleware, PrismaModule } from 'nestjs-prisma';
import { AnimalsModule } from './modules/animals/animals.module';
import { ManagementModule } from './modules/management/management.module';
import { InspecptionsModule } from './modules/inspecptions/inspecptions.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        middlewares: [
          loggingMiddleware({
            logger: new Logger('PrismaMiddleware'),
            logLevel: 'log',
          }),
        ],
      },
    }),
    FarmersModule, UsersModule, AuthModule, VeterinariansModule, VetStationsModule, AnimalsModule, ManagementModule, InspecptionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
