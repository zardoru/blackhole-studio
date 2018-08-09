import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeinputBeatfractionComponent } from './timeinput-beatfraction.component';

describe('TimeinputBeatfractionComponent', () => {
  let component: TimeinputBeatfractionComponent;
  let fixture: ComponentFixture<TimeinputBeatfractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeinputBeatfractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeinputBeatfractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
