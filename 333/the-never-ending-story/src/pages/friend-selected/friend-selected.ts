import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FacebookControllerProvider } from '../../providers/facebook-controller/facebook-controller'

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

  public friends: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fbCtrl: FacebookControllerProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendSelectedPage');
    this.fbCtrl.getFriends().then(friends => {
      this.friends = friends;
    });
  }

}
