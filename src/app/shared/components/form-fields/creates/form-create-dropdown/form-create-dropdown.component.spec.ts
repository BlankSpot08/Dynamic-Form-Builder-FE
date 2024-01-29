import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateDropdownComponent } from './form-create-dropdown.component';

describe('FormCreateDropdownComponent', () => {
  let component: FormCreateDropdownComponent;
  let fixture: ComponentFixture<FormCreateDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCreateDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCreateDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
