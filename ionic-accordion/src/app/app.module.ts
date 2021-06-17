import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { AnotherComponent } from './another/another.component';
import { PopoverComponent } from './popover/PopoverComponent';
import { NotificationComponent } from './notification/notification.component';
import { TextComponent } from './text/text.component';
import { TabsComponent } from './tabs/tabs.component';
import { TableComponent } from './table/table.component';
import { DiscoverComponent } from './discover/discover.component';
import { SignupComponent } from './signup/signup.component';
import { ImagesComponent } from './images/images.component';
import { CoronaComponent } from './corona/corona.component';
import { IconsComponent } from './icons/icons.component';
// import { MenuComponent } from './menu/menu.component';
import { AdminComponent } from './admin/admin.component';
import { CardComponent } from './card/card.component';
import { PortfComponent } from './portf/portf.component';
import { Admin3Component } from './admin3/admin3.component';
import { PropertyManagerComponent } from './property-manager/property-manager.component';
import { SettingsComponent } from './settings/settings.component';
import { CssAccordianComponent } from './css-accordian/css-accordian.component';
import { SlideComponent } from './slide/slide.component';
import { FooterComponent } from './footer/footer.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { BlogsComponent } from './blogs/blogs.component';
import { DTOComponent } from './dto/dto.component';
import { SubDtoComponent } from './sub-dto/sub-dto.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AnotherComponent,
    PopoverComponent,
    NotificationComponent,
    TextComponent,
    TabsComponent,
    TableComponent,
    DiscoverComponent,
    PropertyManagerComponent,
    SignupComponent,
    ImagesComponent,
    CoronaComponent,
    BlogsComponent,
    SubDtoComponent,
    IconsComponent,
    FeedbackComponent,
    SlideComponent,
    FooterComponent,
    DTOComponent,
    //  MenuComponent,
    CssAccordianComponent,
    AdminComponent,
    CardComponent,
    PortfComponent,
    SettingsComponent,
    Admin3Component
  ],
  entryComponents: [NotificationComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [StatusBar, SplashScreen, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
