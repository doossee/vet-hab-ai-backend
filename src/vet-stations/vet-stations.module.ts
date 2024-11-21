import { Module } from '@nestjs/common';
import { VetStationsService } from './vet-stations.service';
import { VetStationsController } from './vet-stations.controller';

@Module({
  controllers: [VetStationsController],
  providers: [VetStationsService],
})
export class VetStationsModule {}
