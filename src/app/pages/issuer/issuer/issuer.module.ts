import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuerComponent } from './issuer.component';
import { IssuerRoutingModule } from './issuer-routing.module';

@NgModule({
  declarations: [IssuerComponent],
  imports: [
    CommonModule,
    IssuerRoutingModule
  ]
})
export class IssuerModule { }
