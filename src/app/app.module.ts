import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {LoginComponent} from './login/login.component';
import {
  MdcCardModule,
  MdcFormFieldModule,
  MdcButtonModule,
  MdcFabModule,
  MdcChipsModule,
  MdcIconModule,
  MdcTextFieldModule,
} from '@angular-mdc/web';
import {SignupComponent} from './signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    MdcCardModule,
    MdcTextFieldModule,
    MdcFormFieldModule,
    MdcChipsModule,
    MdcButtonModule,
    MdcFabModule,
    MdcIconModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
