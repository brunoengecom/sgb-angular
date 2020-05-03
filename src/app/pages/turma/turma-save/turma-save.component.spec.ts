import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmaSaveComponent } from './turma-save.component';

describe('TurmaSaveComponent', () => {
  let component: TurmaSaveComponent;
  let fixture: ComponentFixture<TurmaSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurmaSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmaSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
