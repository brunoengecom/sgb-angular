import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprestimoSaveComponent } from './emprestimo-save.component';

describe('EmprestimoSaveComponent', () => {
  let component: EmprestimoSaveComponent;
  let fixture: ComponentFixture<EmprestimoSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmprestimoSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmprestimoSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
