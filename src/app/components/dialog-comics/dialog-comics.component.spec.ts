import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComicsComponent } from './dialog-comics.component';

describe('DialogComicsComponent', () => {
  let component: DialogComicsComponent;
  let fixture: ComponentFixture<DialogComicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogComicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
