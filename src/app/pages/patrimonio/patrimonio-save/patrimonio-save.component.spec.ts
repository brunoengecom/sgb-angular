import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrimonioSaveComponent } from './patrimonio-save.component';

describe('PatrimonioSaveComponent', () => {
  let component: PatrimonioSaveComponent;
  let fixture: ComponentFixture<PatrimonioSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatrimonioSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatrimonioSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
