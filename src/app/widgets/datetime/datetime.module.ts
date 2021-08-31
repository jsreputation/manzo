import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatetimeComponent } from './datetime.component';

import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    DatetimeComponent
  ],
  imports: [
    CommonModule,
    NgbDatepickerModule,
    FontAwesomeModule
  ],
  exports: [
    DatetimeComponent
  ]
})
export class DatetimeModule { }
