import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations/src/module.d.ts';
import { MatButtonModule, MatInputModule, MatFormField } from '@angular/material';
import * as firebase from 'angularfire2/index.js';


import { AppComponent } from './app.component';
import { PhoneLoginComponent } from './phone-login/phone-login.component';


@NgModule({
  declarations: [
    AppComponent,
    PhoneLoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormField
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
