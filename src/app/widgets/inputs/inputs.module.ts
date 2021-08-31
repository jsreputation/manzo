import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BothComponent } from './both/both.component';



@NgModule({
  declarations: [
    BothComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BothComponent
  ]
})
export class InputsModule { }
