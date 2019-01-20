import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEmitterFunctionComponent } from './select-emitter-function.component';

describe('SelectEmitterFunctionComponent', () => {
  let component: SelectEmitterFunctionComponent;
  let fixture: ComponentFixture<SelectEmitterFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectEmitterFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectEmitterFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
