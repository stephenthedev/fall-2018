import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-chosen-friend',
  templateUrl: 'chosen-friend.html',
})
export class ChosenFriendPage {
 name: string;
 loadimage: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) { this.name = navParams.get('data');
      this.loadimage = navParams.get('image');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChosenFriendPage');
  }

}
