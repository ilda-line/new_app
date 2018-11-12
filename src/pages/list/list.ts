import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   // this.icons = ['logo-html5', 'logo-css3', 'logo-nodejs'];

    this.items = [];
    for(let i = 1; i < 5; i++) {
      this.icons = ['logo-html5', 'logo-css3', 'logo-nodejs', 'logo-angular'];
      this.items.push({
        title: 'Project n°' + i,
        note: 'Projet #' + i,
        icon: this.icons[Math.floor(i - 1 )]
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
