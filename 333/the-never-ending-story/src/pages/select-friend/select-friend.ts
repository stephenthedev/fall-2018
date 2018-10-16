import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FacebookControllerProvider } from '../../providers/facebook-controller/facebook-controller'
import { FriendPage } from '../friend/friend';

@IonicPage()
@Component({
  selector: 'page-select-friend',
  templateUrl: 'select-friend.html',
})

export class SelectFriendPage {
  public friends: any;
  public selectedFriend: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fbCtrl: FacebookControllerProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectFriendPage');

    this.fbCtrl.getFriends().then(friends => {
      this.friends = friends;
    });
  }

  friendTakesStory(friend: any) {
    this.navCtrl.push(FriendPage, {friendname: friend.name, imagelink: friend.picture});
  }

}
