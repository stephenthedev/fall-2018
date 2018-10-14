import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FacebookControllerProvider } from '../../providers/facebook-controller/facebook-controller';
import { FriendPage } from '../../pages/friend/friend';

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
    public fbCtrl: FacebookControllerProvider
  ) {
  }

  selectingFriend(friend: any){
    this.navCtrl.setRoot(FriendPage, {friend: friend});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectFriendPage');

    this.fbCtrl.getFriends().then(friends => {
      this.friends = friends;
    });
  }

}
