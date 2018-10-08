
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FacebookControllerProvider } from '../../providers/facebook-controller/facebook-controller';
/*this creates a connection to the addstory class so
that it and all its contents can be referenced in this select-friend.ts*/
import { AddStoryPage } from '../../pages/add-story/add-story';

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
/*this method when called creates a connection with AddStoryPage
and sends it the name and image of the friend that was clicked*/
  addStory(friend: any){
    this.navCtrl.setRoot(AddStoryPage, {friend: friend});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectFriendPage');

    this.fbCtrl.getFriends().then(friends => {
      this.friends = friends;
    });
  }
}
