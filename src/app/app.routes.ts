import { Routes } from '@angular/router';

import { FormCreateComponent } from './modules/form-create/form-create.component';
import { FormListComponent } from './modules/form-list/form-list.component';
import { FormFillUpComponent } from './modules/form-fill-up/form-fill-up.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'form',
        pathMatch: 'full'
    },
    {
        path: 'form',
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list', component: FormListComponent,
            },
            {
                path: 'create', component: FormCreateComponent
            },
            {
                path: 'fill-up/:title', component: FormFillUpComponent
            }
        ]
    },
];
