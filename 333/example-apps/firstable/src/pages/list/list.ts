import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemPage } from '../item/item';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  public items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('Constructed ListPage Anyone going to see the Nun?');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  createItem() {
    let item = prompt('What do you want to do?');
    this.items.push(item);
  }

  removeItem(item: string) {
    if (confirm("Are you sure you did this?")) {
      let index = this.items.indexOf(item);
      this.items.splice(index, 1);
    }
  }

  goToItem(item: string) {
    this.navCtrl.push(ItemPage, {item: item});
  }
}
