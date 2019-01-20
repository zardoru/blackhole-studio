import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitterParameterTrioComponent } from './emitter-parameter-trio.component';

describe('EmitterParameterTrioComponent', () => {
  let component: EmitterParameterTrioComponent;
  let fixture: ComponentFixture<EmitterParameterTrioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmitterParameterTrioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmitterParameterTrioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
