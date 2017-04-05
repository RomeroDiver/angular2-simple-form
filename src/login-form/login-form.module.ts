import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LoginFormComponent } from './login-form.component';


@NgModule({
  declarations: [
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
  ],
  exports: [
    LoginFormComponent,
  ],
  providers: []
})
export class LoginFormModule { }
