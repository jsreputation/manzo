import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { InvestorsComponent } from './investors/investors.component';
import { IssuesComponent } from './issues/issues.component';

@NgModule({
  declarations: [ DashboardComponent, InvestorsComponent, IssuesComponent ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
