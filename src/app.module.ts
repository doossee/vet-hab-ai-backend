import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { loggingMiddleware, PrismaModule } from 'nestjs-prisma';
import { UsersModule } from './users/users.module';
import { AnimalsModule } from './animals/animals.module';
import { ManagementModule } from './management/management.module';
import { InspecptionsModule } from './inspecptions/inspecptions.module';

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
    AnimalsModule,
    ManagementModule,
    InspecptionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
