import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeinputComponent } from './timeinput.component';

describe('TimeinputComponent', () => {
  let component: TimeinputComponent;
  let fixture: ComponentFixture<TimeinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
