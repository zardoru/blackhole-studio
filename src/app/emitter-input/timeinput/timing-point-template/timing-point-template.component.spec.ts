import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimingPointTemplateComponent } from './timing-point-template.component';

describe('TimingPointTemplateComponent', () => {
  let component: TimingPointTemplateComponent;
  let fixture: ComponentFixture<TimingPointTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimingPointTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimingPointTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
