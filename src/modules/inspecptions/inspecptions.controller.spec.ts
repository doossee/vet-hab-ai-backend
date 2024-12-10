import { Test, TestingModule } from '@nestjs/testing';
import { InspecptionsController } from './inspecptions.controller';
import { InspecptionsService } from './inspecptions.service';

describe('InspecptionsController', () => {
  let controller: InspecptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InspecptionsController],
      providers: [InspecptionsService],
    }).compile();

    controller = module.get<InspecptionsController>(InspecptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
