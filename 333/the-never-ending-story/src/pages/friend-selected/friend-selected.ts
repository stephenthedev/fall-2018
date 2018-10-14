import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FacebookControllerProvider } from '../../providers/facebook-controller/facebook-controller'

@IonicPage()
@Component({
  selector: 'page-select-friend',
  templateUrl: 'friend-selected.html',
})
export class FriendSelectedPage {

  public friendChosen: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
    this.friendChosen = this.navParams.get('friend');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendSelectedPage', this.friendChosen);
    }
  
}
