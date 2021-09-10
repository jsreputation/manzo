import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingComponent } from './widgets/spinners/loading/loading.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { IssuesComponent } from './pages/issuer/dashboard/issues/issues.component';


@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    IssuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: AuthInterceptor }],
  bootstrap: [AppComponent]
})
export class AppModule { }
