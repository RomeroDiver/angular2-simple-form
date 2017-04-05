import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {
    LoginService,
    LocalStorageService,
    WindowService,

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
    WindowService,
    LocalStorageService,
    LoginService,
  ]
})
export class SharedModule { }
