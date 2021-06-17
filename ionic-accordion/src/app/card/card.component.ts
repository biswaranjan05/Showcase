import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PortfComponent } from '../portf/portf.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  cardController: any;

  constructor(public popoverController: PopoverController) {}
  ngOnInit() {}
  async presentNow(ev: any) {
    const popover = await this.popoverController.create({
      component: PortfComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
