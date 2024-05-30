import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    DashboardModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }),
  ],
  providers: [
    HttpClient,
    HttpClientModule,
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
