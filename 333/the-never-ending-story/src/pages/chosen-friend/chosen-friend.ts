import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FacebookControllerProvider } from '../../providers/facebook-controller/facebook-controller'

@IonicPage()
@Component({
  selector: 'page-select-friend',
  templateUrl: 'chosen-friend.html',
})
export class ChosenFriendPage {
  public friends: any;
  public picture: any;
  public name: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fbCtrl: FacebookControllerProvider
  ) {
    this.picture = navParams.get('picture');
    this.name = navParams.get('name');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChosenFriendPage');

    //this.fbCtrl.getFriends().then(friends => {
    //  this.friends = friends;
    //});
  }

  submitFriend(name, picture) {
    console.log(this.picture);
    console.log(this.name);
  }

}
