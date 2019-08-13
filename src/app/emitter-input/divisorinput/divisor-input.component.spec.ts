import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisorInputComponent } from './divisor-input.component';

describe('DivisorInputComponent', () => {
  let component: DivisorInputComponent;
  let fixture: ComponentFixture<DivisorInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisorInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
