import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { DemoComponent } from './demo/demo.component';

const APP_ROUTES: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'demo',
    component: DemoComponent
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
