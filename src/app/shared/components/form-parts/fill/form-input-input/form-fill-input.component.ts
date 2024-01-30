import { Component, Inject, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-view-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-fill-input.component.html',
  styleUrl: './form-fill-input.component.css'
})
export class FormFillInputComponent {
  @Input() placeHolder!: string;
  @Input() type: string = 'type';
  @Input() group!: FormGroup;
}
