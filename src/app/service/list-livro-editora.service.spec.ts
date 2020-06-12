import { TestBed } from '@angular/core/testing';

import { ListLivroEditoraService } from './list-livro-editora.service';

describe('ListLivroEditoraService', () => {
  let service: ListLivroEditoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListLivroEditoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
