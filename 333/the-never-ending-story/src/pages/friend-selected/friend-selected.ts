import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FacebookControllerProvider } from '../../providers/facebook-controller/facebook-controller';

/**
 * Generated class for the FriendSelectedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-friend-selected',
  templateUrl: 'friend-selected.html',
})
export class FriendSelectedPage {
  public id: any;
  public friends: any;
  public friend: any; //the actual friend clicked on

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fbCtrl: FacebookControllerProvider
  ) {
    this.id = this.navParams.get('storyId');
    this.fbCtrl.getFriends().then(
        friends => {
            this.friends = friends;
            for(let i in friends){
              if(friends[i].id == this.id){
                this.friend = friends[i];
              }
          }
          console.log(this.friend.name + " will take it from here!... maybe");
        //  return this.friend;
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendSelectedPage', this.id);
    //console.log(this.friends);


  }

}
