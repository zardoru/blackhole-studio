import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEmissionFunctionDialogComponent } from './select-emission-function-dialog.component';

describe('SelectEmissionFunctionDialogComponent', () => {
  let component: SelectEmissionFunctionDialogComponent;
  let fixture: ComponentFixture<SelectEmissionFunctionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectEmissionFunctionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectEmissionFunctionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
