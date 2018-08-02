import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEmissionFunctionComponent } from './select-emission-function.component';

describe('SelectEmissionFunctionComponent', () => {
  let component: SelectEmissionFunctionComponent;
  let fixture: ComponentFixture<SelectEmissionFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectEmissionFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectEmissionFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
