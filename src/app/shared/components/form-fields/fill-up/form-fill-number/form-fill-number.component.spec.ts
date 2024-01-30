import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFillNumberComponent } from './form-fill-number.component';

describe('FormFillNumberComponent', () => {
  let component: FormFillNumberComponent;
  let fixture: ComponentFixture<FormFillNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFillNumberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormFillNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
