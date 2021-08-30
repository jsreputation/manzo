import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatetimeComponent } from './datetime.component';

// import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';


@NgModule({
  declarations: [
    DatetimeComponent
  ],
  imports: [
    CommonModule,
    // OwlDateTimeModule, 
    // OwlNativeDateTimeModule,
  ],
  exports: [
    DatetimeComponent
  ]
})
export class DatetimeModule { }
