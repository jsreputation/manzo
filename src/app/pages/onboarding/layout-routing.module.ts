import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: OnboardingComponent
      },
      {
        path: 'onboarding',
        component: OnboardingComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'issue',
        loadChildren: () => import('../issuer/issuer/issuer.module').then(m => m.IssuerModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
