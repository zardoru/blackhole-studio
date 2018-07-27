import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeinputBeatsComponent } from './timeinput-beats.component';

describe('TimeinputBeatsComponent', () => {
  let component: TimeinputBeatsComponent;
  let fixture: ComponentFixture<TimeinputBeatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeinputBeatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeinputBeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
