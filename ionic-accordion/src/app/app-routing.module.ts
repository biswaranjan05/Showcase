import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AnotherComponent } from './another/another.component';
// tslint:disable-next-line: no-unused-expression
import { PopoverComponent } from './popover/PopoverComponent';
import { TextComponent } from './text/text.component';
import { TabsComponent } from './tabs/tabs.component';
import { TableComponent } from './table/table.component';
import { DiscoverComponent } from './discover/discover.component';
import { SignupComponent } from './signup/signup.component';
import { ImagesComponent } from './images/images.component';
import { CoronaComponent } from './corona/corona.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationComponent } from './notification/notification.component';
// import {MenuComponent} from './menu/menu.component';
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
// import { FeedbackComponent } from 'popup/signup-login-about-privacy-search/src/app/feedback/feedback.component';
// import { RatingComponent } from 'popup/signup-login-about-privacy-search/src/app/rating/rating.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'about', component: AboutComponent },
  {
    path: 'recipes',
    loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesPageModule)
  },
  {
    path: 'Dto',
    component: DTOComponent
  },
  {
    path: 'sub-dto',
    component: SubDtoComponent
  },

  {
    path: 'another',
    component: AnotherComponent
  },
  {
    path: 'popover',
    component: PopoverComponent
  },
  {
    path: 'blogs',
    component: BlogsComponent
  },
  {
    path: 'css-accordian',
    component: CssAccordianComponent
  },
  {
    path: 'property-manager',
    component: PropertyManagerComponent
  },
  {
    path: 'slide',
    component: SlideComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'notification',
    component: NotificationComponent
  },
  {
    path: 'text',
    component: TextComponent
  },
  {
    path: 'tabs',
    component: TabsComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'discover',
    component: DiscoverComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'images',
    component: ImagesComponent
  },
  {
    path: 'corona',
    component: CoronaComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'icons',
    component: IconsComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  // {
  //   path: 'rating', component: RatingComponent
  // },
  // {
  //    path: 'menu', component: MenuComponent
  // } ,
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin3',
    component: Admin3Component
  },
  {
    path: 'card',
    component: CardComponent
  },
  {
    path: 'portf',
    component: PortfComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
