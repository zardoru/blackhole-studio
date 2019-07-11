import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimingPointsManipulationComponent } from './timing-points-manipulation.component';

describe('TimingPointsManipulationComponent', () => {
  let component: TimingPointsManipulationComponent;
  let fixture: ComponentFixture<TimingPointsManipulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimingPointsManipulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimingPointsManipulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
