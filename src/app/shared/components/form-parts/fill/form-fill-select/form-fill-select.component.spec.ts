import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFillSelectComponent } from './form-fill-select.component';

describe('FormFillSelectComponent', () => {
  let component: FormFillSelectComponent;
  let fixture: ComponentFixture<FormFillSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFillSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormFillSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
