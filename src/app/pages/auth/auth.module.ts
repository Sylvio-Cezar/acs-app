import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../../shared/shared.module';
import { RecoverComponent } from './recover/recover.component';

@NgModule({
  declarations: [
    LoginComponent,
    RecoverComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
