import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule, loggingMiddleware } from 'nestjs-prisma';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalsModule } from './modules/animals/animals.module';
import { AuthModule } from './modules/auth/auth.module';
import { InspecptionsModule } from './modules/inspecptions/inspecptions.module';
import { ManagementModule } from './modules/management/management.module';
import { UsersModule, VeterinariansModule, FarmersModule } from './modules/accounts';

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
    AuthModule,
    UsersModule,
    VeterinariansModule,
    FarmersModule,
    AnimalsModule,
    ManagementModule,
    InspecptionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
