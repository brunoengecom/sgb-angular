import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLivrosEditoraComponent } from './list-livros-editora.component';

describe('ListLivrosEditoraComponent', () => {
  let component: ListLivrosEditoraComponent;
  let fixture: ComponentFixture<ListLivrosEditoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLivrosEditoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLivrosEditoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
