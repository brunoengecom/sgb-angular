import { TestBed } from '@angular/core/testing';

import { AreaDeConhecimentoService } from './area-de-conhecimento.service';

describe('AreaDeConhecimentoService', () => {
  let service: AreaDeConhecimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaDeConhecimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
