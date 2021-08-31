import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BothComponent } from './both/both.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { NormalComponent } from './normal/normal.component';



@NgModule({
  declarations: [
    BothComponent,
    CheckboxComponent,
    NormalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BothComponent,
    CheckboxComponent,
    NormalComponent
  ]
})
export class InputsModule { }
