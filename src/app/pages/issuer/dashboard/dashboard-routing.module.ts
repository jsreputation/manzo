import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { InvestorsComponent } from './investors/investors.component';
import { IssuesComponent } from './issues/issues.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
        {
            path: 'investors',
            component: InvestorsComponent
        },
        {
            path: 'issues',
            component: IssuesComponent
        },
        {
          path: 'settings',
          component: InvestorsComponent
         },
        {
            path: '',
            redirectTo: 'issues'
        }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
