import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFillInputComponent } from './form-fill-input.component';

describe('FormViewInputComponent', () => {
  let component: FormFillInputComponent;
  let fixture: ComponentFixture<FormFillInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFillInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormFillInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
