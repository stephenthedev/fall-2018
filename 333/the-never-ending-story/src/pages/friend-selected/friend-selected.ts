import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-friend-selected',
  templateUrl: 'friend-selected.html',
})
export class FriendSelectedPage {

  public friendAppointed: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
    this.friendAppointed = this.navParams.get('friend');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendSelectedPage', this.friendAppointed);
  }
}
