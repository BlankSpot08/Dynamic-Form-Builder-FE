import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFillDropdownComponent } from './form-fill-dropdown.component';

describe('FormFillDropdownComponent', () => {
  let component: FormFillDropdownComponent;
  let fixture: ComponentFixture<FormFillDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFillDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormFillDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
