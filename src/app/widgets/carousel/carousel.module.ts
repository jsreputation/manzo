import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel.component';


@NgModule({
  declarations: [CarouselComponent],
  imports: [
    CommonModule,
    // NgbCarouselModule,
  ],
  exports: [
    CarouselComponent
  ]
})
export class CarouselModule { }
