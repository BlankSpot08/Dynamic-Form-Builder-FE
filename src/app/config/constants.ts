import { FormCreateTextComponent } from "../shared/components/form-fields/creates/form-create-text/form-create-text.component"
import { FormCreateNumberComponent } from "../shared/components/form-fields/creates/form-create-number/form-create-number.component"
import { FormCreateDropdownComponent } from "../shared/components/form-fields/creates/form-create-dropdown/form-create-dropdown.component"
import { FormCreateTitleComponent } from "../shared/components/form-fields/creates/form-create-title/form-create-title.component"

export const FORM_INPUTS: any = {
    "title": FormCreateTitleComponent,
    "dropdown" : FormCreateDropdownComponent, 
    "number": FormCreateNumberComponent,
    "text": FormCreateTextComponent
}

export const INPUT_MULTIPLE: string[] = [
    "dropdown"
]