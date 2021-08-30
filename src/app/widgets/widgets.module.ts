import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { CarouselComponent } from './carousel/carousel.component';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

const widgets = [
  ButtonComponent,
  CardComponent,
  CarouselComponent
]

@NgModule({
  declarations: widgets,
  imports: [
    CommonModule,
    OwlDateTimeModule
  ],
  exports: widgets
})
export class WidgetsModule { }
