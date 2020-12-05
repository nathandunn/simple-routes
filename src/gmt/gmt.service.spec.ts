import { Test, TestingModule } from '@nestjs/testing';
import { GmtService } from './gmt.service';
import { GmtRepository } from './gmt.repository';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Gmt } from './gmt';

describe('GmtService', () => {
  let service: GmtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GmtService,
        {
          provide: getRepositoryToken(Gmt),
          useValue: new GmtRepository(),
        },
      ],
    }).compile();

    service = module.get<GmtService>(GmtService);
  });

  it('should be defined', async () => {
    service = new GmtService();
    service.gmtRepository = new GmtRepository();
    expect(service).toBeDefined();
    const output = await service.findAll();
  });
});
