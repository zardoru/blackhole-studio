import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeEmittersComponent } from './compose-emitters.component';

describe('ComposeEmittersComponent', () => {
  let component: ComposeEmittersComponent;
  let fixture: ComponentFixture<ComposeEmittersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposeEmittersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeEmittersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
