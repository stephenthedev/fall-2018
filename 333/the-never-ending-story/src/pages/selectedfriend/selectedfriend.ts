import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FacebookControllerProvider } from '../../providers/facebook-controller/facebook-controller';
/**
 * Generated class for the SelectedfriendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selectedfriend',
  templateUrl: 'selectedfriend.html',
})
export class SelectedfriendPage {
  public friend: any;

  constructor(
     public navCtrl: NavController,
     public navParams: NavParams,
     public fbCtrl: FacebookControllerProvider) {
       this.friend = this.navParams.get('friend0');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectedfriendPage');

  }


}
