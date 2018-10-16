import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FacebookControllerProvider} from '../../providers/facebook-controller/facebook-controller';
import {FriendselectedPage} from '../friendselected/friendselected';

/**
 * Generated class for the SelectFriendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-friend',
  templateUrl: 'select-friend.html',
})
export class SelectFriendPage {
  public friends: any;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public fbCtrl: FacebookControllerProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectFriendPage');

    this.fbCtrl.getFriends().then(friends => {
      this.friends=friends
    });
  }

  friendpopup(picture: string, name: string){
    console.log('pic :', picture);
    this.navCtrl.push(FriendselectedPage, {pic: picture, friendName: name});
  }

}
