import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeinputDurationComponent } from './timeinput-duration.component';

describe('TimeinputDurationComponent', () => {
  let component: TimeinputDurationComponent;
  let fixture: ComponentFixture<TimeinputDurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeinputDurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeinputDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
