import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeinputStartendComponent } from './timeinput-startend.component';

describe('TimeinputStartendComponent', () => {
  let component: TimeinputStartendComponent;
  let fixture: ComponentFixture<TimeinputStartendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeinputStartendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeinputStartendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
