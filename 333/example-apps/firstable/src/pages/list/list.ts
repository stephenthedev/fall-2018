import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

}
