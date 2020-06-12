import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoraEditComponent } from './editora-edit.component';

describe('EditoraEditComponent', () => {
  let component: EditoraEditComponent;
  let fixture: ComponentFixture<EditoraEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditoraEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditoraEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
