import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelectFriendPage } from '../select-friend/select-friend';

/**
 * Generated class for the FriendselectedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-friendselected',
  templateUrl: 'friendselected.html',
})
export class FriendselectedPage {
  selectpic;
  name;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.selectpic=this.navParams.get('pic');
  this.name=this.navParams.get('friendName');


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendselectedPage');


    console.log('pic:, ', this.selectpic);
    console.log('name:',this.name);
  }

}
