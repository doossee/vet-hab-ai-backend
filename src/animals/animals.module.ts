import { Module } from '@nestjs/common';
import { AnimalsService, VaccinesService } from './services';
import { AnimalsController, VaccinesController } from './controllers';

@Module({
  controllers: [AnimalsController, VaccinesController],
  providers: [AnimalsService, VaccinesService],
})
export class AnimalsModule {}
