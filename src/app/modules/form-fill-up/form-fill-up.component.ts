import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ConfigService } from '../../services/config/config.service';
import { ActivatedRoute } from '@angular/router';
import { FormViewTitleComponent } from '../../shared/components/form-fields/show/form-view-title/form-view-title.component';
import { CommonModule } from '@angular/common';
import { FormFillComponent } from '../../shared/components/form-fill/form-fill.component';

@Component({
  selector: 'app-form-fill-up',
  standalone: true,
  imports: [CommonModule, FormViewTitleComponent, FormFillComponent, ],
  templateUrl: './form-fill-up.component.html',
  styleUrl: './form-fill-up.component.css'
})
export class FormFillUpComponent {
  form!: any

  constructor(private httpClient: HttpClient, 
    private configService: ConfigService, 
    private route: ActivatedRoute) {  }

  ngOnInit() {
    const parameter = this.route.snapshot.paramMap.get('title');
    
    const getFormByTitleRequest = this.httpClient.get(this.configService.getBaseURL() + `/form/get/${parameter}`)
      .subscribe(value => {
        this.form = value
        this.form = this.form['form'][0]
      })
  }
}
