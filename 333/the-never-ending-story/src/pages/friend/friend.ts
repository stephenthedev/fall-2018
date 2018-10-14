import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FriendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-friend',
  templateUrl: 'friend.html',
})
export class FriendPage {
public friendAppointed: any;
  constructor(public navCtrl: NavController, public navParams: NavParams)
{
  this.friendAppointed = this.navParams.get('friend');
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendPage', this.friendAppointed);
  }

}
