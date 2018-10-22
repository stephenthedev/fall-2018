import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AlternatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alternate',
  templateUrl: 'alternate.html',
})
export class AlternatePage {

  private gender: string;
  private birthday: string;
  private name: string;
  private email: string;
  private userText: string;
  private emailWasUpdated: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.gender = navParams.get('gender');
    this.birthday = navParams.get('birthday');
    this.name = navParams.get('name');
    this.email = navParams.get('email');
    this.userText = this.email;
    this.emailWasUpdated = false;

    console.log("=== USER INFOS ===");
    console.log("Gender : " + this.gender);
    console.log("Birthday : " + this.birthday);
    console.log("Name : " + this.name);
    console.log("Email : " + this.email);
  }

  updateEmail() {
    console.log('Email was: ' + this.email + ' and now it\'s ' + this.userText);
    this.email = this.userText;
    this.emailWasUpdated = true;
  }
}
