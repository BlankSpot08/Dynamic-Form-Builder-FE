import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormViewTitleComponent } from './form-view-title.component';

describe('FormViewTitleComponent', () => {
  let component: FormViewTitleComponent;
  let fixture: ComponentFixture<FormViewTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormViewTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormViewTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
