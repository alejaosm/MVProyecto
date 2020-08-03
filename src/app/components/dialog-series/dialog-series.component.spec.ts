import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSeriesComponent } from './dialog-series.component';

describe('DialogSeriesComponent', () => {
  let component: DialogSeriesComponent;
  let fixture: ComponentFixture<DialogSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
