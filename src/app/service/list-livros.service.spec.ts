import { TestBed } from '@angular/core/testing';

import { ListLivrosService } from './list-livros.service';

describe('ListLivrosService', () => {
  let service: ListLivrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListLivrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
