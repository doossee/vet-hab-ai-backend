import { Module } from '@nestjs/common';
import { InspecptionsService } from './inspecptions.service';
import { InspecptionsController } from './inspecptions.controller';

@Module({
  controllers: [InspecptionsController],
  providers: [InspecptionsService],
})
export class InspecptionsModule {}
