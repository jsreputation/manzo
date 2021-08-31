import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatetimeComponent } from './datetime.component';

import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [
    DatetimeComponent
  ],
  imports: [
    CommonModule,
    NgbDatepickerModule
  ],
  exports: [
    DatetimeComponent
  ]
})
export class DatetimeModule { }
