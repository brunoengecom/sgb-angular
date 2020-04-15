import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroDetalhesComponent } from './livro-detalhes.component';

describe('LivroDetalhesComponent', () => {
  let component: LivroDetalhesComponent;
  let fixture: ComponentFixture<LivroDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivroDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
