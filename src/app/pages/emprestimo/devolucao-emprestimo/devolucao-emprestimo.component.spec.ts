import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolucaoEmprestimoComponent } from './devolucao-emprestimo.component';

describe('DevolucaoEmprestimoComponent', () => {
  let component: DevolucaoEmprestimoComponent;
  let fixture: ComponentFixture<DevolucaoEmprestimoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevolucaoEmprestimoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevolucaoEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
