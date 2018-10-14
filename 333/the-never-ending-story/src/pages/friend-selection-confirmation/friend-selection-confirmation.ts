import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FrientSelectionConfirmationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-friend-selection-confirmation',
  templateUrl: 'friend-selection-confirmation.html',
})
export class FriendSelectionConfirmationPage {
  public name: string;
  public picture: string;
  public id: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.name = navParams.get('name');
      this.picture = navParams.get('picture');
      this.id = navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FrientSelectionConfirmationPage');
  }
}
