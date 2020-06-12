import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDeConhecimentoEditComponent } from './area-de-conhecimento-edit.component';

describe('AreaDeConhecimentoEditComponent', () => {
  let component: AreaDeConhecimentoEditComponent;
  let fixture: ComponentFixture<AreaDeConhecimentoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaDeConhecimentoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaDeConhecimentoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
