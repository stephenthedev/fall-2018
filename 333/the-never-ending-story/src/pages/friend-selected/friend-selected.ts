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

  public selectedFriend: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedFriend = this.navParams.get('friend');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendSelectedPage', this.selectedFriend);
  }


}
