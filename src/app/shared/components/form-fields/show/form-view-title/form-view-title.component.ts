import { Component, Input } from '@angular/core';
import { FormField } from '../../interface/form-field';
import { FormViewLabelComponent } from '../../../form-parts/show/form-view-label/form-view-label.component';
import { FormItemComponent } from '../../form-item/form-item.component';

@Component({
  selector: 'app-form-view-title',
  standalone: true,
  imports: [FormViewLabelComponent],
  templateUrl: './form-view-title.component.html',
  styleUrl: './form-view-title.component.css'
})
export class FormViewTitleComponent implements FormField {
  @Input() title: string = '';
  @Input() description!: string;
}
