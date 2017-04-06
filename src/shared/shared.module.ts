import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {
    LoginService,
    LocalStorageService,
    WindowService,

    ErrorMessageComponent,
    SuccessMessageComponent,
} from './';

@NgModule({
  declarations: [
    ErrorMessageComponent,
    SuccessMessageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [
    FormsModule,
    ErrorMessageComponent,
    SuccessMessageComponent,
  ],
  providers: [
    WindowService,
    LocalStorageService,
    LoginService,
  ]
})
export class SharedModule { }
