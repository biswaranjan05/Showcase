import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { HomeModule } from './home/home.module';

import { AboutModule } from './about/about.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NewComponentComponent } from './new-component/new-component.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    
    IonicModule.forRoot(),
    
    HomeModule,
    AboutModule,
    
    AppRoutingModule 
  ],
  declarations: [AppComponent, NewComponentComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
