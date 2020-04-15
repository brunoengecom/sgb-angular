import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDeConhecimentoComponent } from './area-de-conhecimento.component';

describe('AreaDeConhecimentoComponent', () => {
  let component: AreaDeConhecimentoComponent;
  let fixture: ComponentFixture<AreaDeConhecimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaDeConhecimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaDeConhecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
