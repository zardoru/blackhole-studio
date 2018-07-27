import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisorinputComponent } from './divisorinput.component';

describe('DivisorinputComponent', () => {
  let component: DivisorinputComponent;
  let fixture: ComponentFixture<DivisorinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisorinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisorinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
