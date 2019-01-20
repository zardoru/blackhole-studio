import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeinputNotetimesComponent } from './timeinput-notetimes.component';

describe('TimeinputNotetimesComponent', () => {
  let component: TimeinputNotetimesComponent;
  let fixture: ComponentFixture<TimeinputNotetimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeinputNotetimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeinputNotetimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
