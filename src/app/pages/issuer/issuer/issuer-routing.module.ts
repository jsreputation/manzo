import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigSTOComponent } from '../config-sto/config-sto.component';
import { EditStoComponent } from '../edit-sto/edit-sto.component';
import { InvestorsComponent } from '../dashboard/investors/investors.component';
import { IssuerComponent } from './issuer.component';



const routes: Routes = [
  {
    path: '',
    component: IssuerComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'newsto',
        component: ConfigSTOComponent
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
