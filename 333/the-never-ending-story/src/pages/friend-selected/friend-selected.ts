import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FriendSelectedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-friend-selected',
  templateUrl: 'friend-selected.html',
})
export class FriendSelectedPage {

  public friend : any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.friend = this.navParams.get('friend1');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendSelectedPage');
  }

}
