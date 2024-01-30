import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { FormComponent } from '../../shared/components/form/form.component';

import { FormCreateService } from '../../services/form-create/form-create.service';

@Component({
  selector: 'app-form-create',
  standalone: true,
  imports: [FormsModule, FormComponent, CommonModule],
  templateUrl: './form-create.component.html',
  styleUrl: './form-create.component.css'
})
export class FormCreateComponent {
  @ViewChild(FormComponent) formComponent!: FormComponent;
  
  constructor(private formCreateService: FormCreateService) { }

  addNewField(type:string) {
    this.formComponent.addFieldGroup(type);
  }
  
  onSubmit() {
    this.formComponent.onSubmit();
  }
}
