import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissionFunctionParametersAssignmentComponent } from './emission-function-parameters-assignment.component';

describe('EmissionFunctionParametersAssignmentComponent', () => {
  let component: EmissionFunctionParametersAssignmentComponent;
  let fixture: ComponentFixture<EmissionFunctionParametersAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmissionFunctionParametersAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmissionFunctionParametersAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
