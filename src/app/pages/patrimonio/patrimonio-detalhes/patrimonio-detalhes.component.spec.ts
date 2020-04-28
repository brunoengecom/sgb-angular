import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrimonioDetalhesComponent } from './patrimonio-detalhes.component';

describe('PatrimonioDetalhesComponent', () => {
  let component: PatrimonioDetalhesComponent;
  let fixture: ComponentFixture<PatrimonioDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatrimonioDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatrimonioDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
