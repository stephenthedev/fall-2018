import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-story',
  templateUrl: 'add-story.html',
})
export class AddStoryPage {

  public selectedFriend: any;
/*the selected friend  is equal to th chosen 'friend'
on the select friend web page*/
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedFriend = this.navParams.get('friend');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddStoryPage', this.selectedFriend);
  }
}
