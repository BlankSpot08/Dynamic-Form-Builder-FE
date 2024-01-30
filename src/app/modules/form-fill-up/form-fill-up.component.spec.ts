import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFillUpComponent } from './form-fill-up.component';

describe('FormFillUpComponent', () => {
  let component: FormFillUpComponent;
  let fixture: ComponentFixture<FormFillUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFillUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormFillUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
