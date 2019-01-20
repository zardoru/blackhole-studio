import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeTimingPointsComponent } from './compose-timing-points.component';

describe('ComposeTimingPointsComponent', () => {
  let component: ComposeTimingPointsComponent;
  let fixture: ComponentFixture<ComposeTimingPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposeTimingPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeTimingPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
