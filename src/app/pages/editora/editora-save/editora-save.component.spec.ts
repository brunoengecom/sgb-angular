import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoraSaveComponent } from './editora-save.component';

describe('EditoraSaveComponent', () => {
  let component: EditoraSaveComponent;
  let fixture: ComponentFixture<EditoraSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditoraSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditoraSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
