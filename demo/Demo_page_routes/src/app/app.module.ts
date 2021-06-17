import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatNativeDateModule } from '@angular/material';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DemoMaterialModule } from './demo-material.module';
import { AppRoutingModule } from './app-routing.module';
import { DemoRoutingModule } from './demo/demo-routing.module';

import { DemoModule } from './demo/demo.module';

import { AppComponent } from './app.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,

    DemoMaterialModule,

    DemoRoutingModule,

    AppRoutingModule,

    DemoModule
  ],
  entryComponents: [AppComponent],
  declarations: [AppComponent, WelcomeComponent, DemoComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
