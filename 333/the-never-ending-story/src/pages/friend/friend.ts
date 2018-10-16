import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-friend',
  templateUrl: 'friend.html',
})

export class FriendPage {

  public friendName: string;
  public imageLink: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendPage');

    this.friendName = this.navParams.get('friendname');
    this.imageLink = this.navParams.get('imagelink');

    console.log(this.friendName);
    console.log(this.imageLink);
  }

}
