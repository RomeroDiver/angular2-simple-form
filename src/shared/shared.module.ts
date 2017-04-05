import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {
    LoginService,

    ErrorMessageComponent,
} from './';

@NgModule({
  declarations: [
    ErrorMessageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [
    FormsModule,
    ErrorMessageComponent,
  ],
  providers: [
    LoginService
  ]
})
export class SharedModule { }
