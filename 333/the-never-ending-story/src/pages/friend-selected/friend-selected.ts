import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FacebookControllerProvider } from '../../providers/facebook-controller/facebook-controller'
import { SelectFriendPage } from '../select-friend/select-friend'

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

  public selectedFriend: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedFriend = this.navParams.get('friend');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendSelectedPage');
  }

}
