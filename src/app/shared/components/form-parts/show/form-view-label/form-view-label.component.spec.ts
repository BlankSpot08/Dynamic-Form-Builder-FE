import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormViewLabelComponent } from './form-view-label.component';

describe('FormViewLabelComponent', () => {
  let component: FormViewLabelComponent;
  let fixture: ComponentFixture<FormViewLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormViewLabelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormViewLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
