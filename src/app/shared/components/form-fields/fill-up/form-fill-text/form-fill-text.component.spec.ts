import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFillTextComponent } from './form-fill-text.component';

describe('FormFillTextComponent', () => {
  let component: FormFillTextComponent;
  let fixture: ComponentFixture<FormFillTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFillTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormFillTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
