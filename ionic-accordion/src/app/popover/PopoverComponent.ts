import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { NotificationComponent } from '../notification/notification.component';
@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {
  static popoverComponent: any;
  constructor(public popoverController: PopoverController) {}
  ngOnInit() {}
  async presentNow(ev: any) {
    const popover = await this.popoverController.create({
      component: NotificationComponent,
      // cssClass:'notification-pop',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
