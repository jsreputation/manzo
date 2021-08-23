import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    OnboardingComponent, 
    HeaderComponent, 
    FooterComponent, 
    LayoutComponent, ContactComponent, AboutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgbCarouselModule
  ]
})
export class LayoutModule { }
