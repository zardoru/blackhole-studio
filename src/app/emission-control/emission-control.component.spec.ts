import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissionControlComponent } from './emission-control.component';

describe('EmissionControlComponent', () => {
  let component: EmissionControlComponent;
  let fixture: ComponentFixture<EmissionControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmissionControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmissionControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
