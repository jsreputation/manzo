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
            path: 'stoall',
            component: IssuesComponent
        },
        {
            path: 'investorsyours',
            component: InvestorsComponent
        },
        {
            path: 'investorsall',
            component: InvestorsComponent
        },
        {
            path: 'stoyours',
            component: IssuesComponent
        },
        {
            path: '',
            redirectTo: 'stoyours'
        }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
