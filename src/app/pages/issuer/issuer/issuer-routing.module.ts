import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigSTOComponent } from '../config-sto/config-sto.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { EditStoComponent } from '../edit-sto/edit-sto.component';
import { InvestorsComponent } from '../investors/investors.component';
import { IssuerComponent } from './issuer.component';



const routes: Routes = [
  {
    path: '',
    component: IssuerComponent,
    children: [
      {
        path: '',
        redirectTo: 'newsto'
      },
      {
        path: 'newsto',
        component: ConfigSTOComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'editsto/:token',
        component: EditStoComponent
      },
      {
        path: 'investors/:token',
        component: InvestorsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssuerRoutingModule { }
