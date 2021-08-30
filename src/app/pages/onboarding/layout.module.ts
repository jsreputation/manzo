import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingComponent } from './onboarding/onboarding.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';




@NgModule({
  declarations: [
    OnboardingComponent, 
    HeaderComponent, 
    FooterComponent, 
    LayoutComponent, 
    ContactComponent, 
    AboutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FontAwesomeModule,
  ],
})
export class LayoutModule { }
