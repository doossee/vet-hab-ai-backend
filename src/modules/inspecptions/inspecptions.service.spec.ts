import { Test, TestingModule } from '@nestjs/testing';
import { InspecptionsService } from './inspecptions.service';

describe('InspecptionsService', () => {
  let service: InspecptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InspecptionsService],
    }).compile();

    service = module.get<InspecptionsService>(InspecptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
