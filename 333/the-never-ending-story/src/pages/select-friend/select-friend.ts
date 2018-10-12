import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChosenFriendPage } from '../chosen-friend/chosen-friend';
import { FacebookControllerProvider } from '../../providers/facebook-controller/facebook-controller';


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

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectFriendPage');

    this.fbCtrl.getFriends().then(friends => {
      this.friends = friends;
    });
  }

  confirmFriend(){
  }


  pointFriend(image, name) {
    this.navCtrl.push(ChosenFriendPage, {image: image, data: name});
  }

}
