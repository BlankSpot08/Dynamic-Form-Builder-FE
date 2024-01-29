import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateTitleComponent } from './form-create-title.component';

describe('FormCreateTitleComponent', () => {
  let component: FormCreateTitleComponent;
  let fixture: ComponentFixture<FormCreateTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCreateTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCreateTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
