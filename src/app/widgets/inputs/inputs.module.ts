import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BothComponent } from './both/both.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { NormalComponent } from './normal/normal.component';
import { RadioComponent } from './radio/radio.component';



@NgModule({
  declarations: [
    BothComponent,
    CheckboxComponent,
    NormalComponent,
    RadioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BothComponent,
    CheckboxComponent,
    NormalComponent,
    RadioComponent
  ]
})
export class InputsModule { }
