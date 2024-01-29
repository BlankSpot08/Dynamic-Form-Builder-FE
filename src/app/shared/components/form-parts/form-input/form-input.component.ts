import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormService } from '../../../../services/form/form-service.service';


@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.css'
})
export class FormInputComponent {
  @Input() inputString: string = 'inputPlaceholder';
  @Input() customHolder: string = 'default - Enter your input here...' ;
  @Input() customType: string = 'text';
  @Input() group!: FormGroup;

  ngOnInit() {}
}
