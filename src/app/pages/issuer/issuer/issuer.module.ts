import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuerComponent } from './issuer.component';
import { IssuerRoutingModule } from './issuer-routing.module';

import { DatetimeModule } from '../../../widgets/datetime/datetime.module';
import { InputsModule } from 'src/app/widgets/inputs/inputs.module';

import { ConfigSTOComponent } from '../config-sto/config-sto.component';

@NgModule({
  declarations: [
    IssuerComponent, 
    ConfigSTOComponent
  ],
  imports: [
    CommonModule,
    IssuerRoutingModule,
    DatetimeModule,
    InputsModule
  ]
})
export class IssuerModule { }
