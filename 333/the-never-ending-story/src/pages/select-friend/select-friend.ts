import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FriendSelectionConfirmationPage } from '../friend-selection-confirmation/friend-selection-confirmation';
import { FacebookControllerProvider } from '../../providers/facebook-controller/facebook-controller'

@IonicPage()
@Component({
  selector: 'page-select-friend',
  templateUrl: 'select-friend.html',
})
export class SelectFriendPage {
  public friends: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fbCtrl: FacebookControllerProvider) {
  }

  ionViewDidLoad() {
    this.fbCtrl.getFriends().then(friends => {
      this.friends = friends;
    });
  }

  chooseFriend(friend: any) {
    this.navCtrl.push(FriendSelectionConfirmationPage, {
      name: friend.name,
      picture: friend.picture,
      id: friend.id
    });
  }
}
