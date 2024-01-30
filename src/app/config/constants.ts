import { FormCreateTextComponent } from "../shared/components/form-fields/creates/form-create-text/form-create-text.component"
import { FormCreateNumberComponent } from "../shared/components/form-fields/creates/form-create-number/form-create-number.component"
import { FormCreateDropdownComponent } from "../shared/components/form-fields/creates/form-create-dropdown/form-create-dropdown.component"
import { FormCreateTitleComponent } from "../shared/components/form-fields/creates/form-create-title/form-create-title.component"

import { FormViewTitleComponent } from "../shared/components/form-fields/show/form-view-title/form-view-title.component"

import { FormFillTextComponent } from "../shared/components/form-fields/fill-up/form-fill-text/form-fill-text.component"
import { FormFillNumberComponent } from "../shared/components/form-fields/fill-up/form-fill-number/form-fill-number.component"
import { FormFillDropdownComponent } from "../shared/components/form-fields/fill-up/form-fill-dropdown/form-fill-dropdown.component"

export const FORM_INPUTS: any = {
    "title": FormCreateTitleComponent,
    "dropdown" : FormCreateDropdownComponent, 
    "number": FormCreateNumberComponent,
    "text": FormCreateTextComponent,

    "viewTitle": FormViewTitleComponent,
    
    "filltext": FormFillTextComponent,
    "fillnumber": FormFillNumberComponent,
    "filldropdown": FormFillDropdownComponent
}

export const INPUT_MULTIPLE: string[] = [
    "dropdown"
]