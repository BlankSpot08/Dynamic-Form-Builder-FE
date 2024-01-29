import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateNumberComponent } from './form-create-number.component';

describe('FormCreateNumberComponent', () => {
  let component: FormCreateNumberComponent;
  let fixture: ComponentFixture<FormCreateNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCreateNumberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCreateNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
