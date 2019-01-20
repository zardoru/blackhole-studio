import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFunctionDialogComponent } from './select-function-dialog.component';

describe('SelectFunctionDialogComponent', () => {
  let component: SelectFunctionDialogComponent;
  let fixture: ComponentFixture<SelectFunctionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectFunctionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFunctionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
