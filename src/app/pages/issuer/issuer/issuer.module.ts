import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuerComponent } from './issuer.component';
import { IssuerRoutingModule } from './issuer-routing.module';
import { DatetimeModule } from 'src/app/widgets/datetime/datetime.module';
import { ConfigSTOComponent } from '../config-sto/config-sto.component';

@NgModule({
  declarations: [
    IssuerComponent, 
    ConfigSTOComponent
  ],
  imports: [
    CommonModule,
    IssuerRoutingModule,
    DatetimeModule
  ]
})
export class IssuerModule { }
