import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFunctionDialogComponent } from './delete-function-dialog.component';

describe('DeleteFunctionDialogComponent', () => {
  let component: DeleteFunctionDialogComponent;
  let fixture: ComponentFixture<DeleteFunctionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFunctionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFunctionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
