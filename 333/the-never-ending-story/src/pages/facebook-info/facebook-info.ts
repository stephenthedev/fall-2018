import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
/**
 * Generated class for the FacebookInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-facebook-info',
  templateUrl: 'facebook-info.html',
})
export class FacebookInfoPage {
gender;
name;
birth;
email;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: Facebook) {
    this.gender=this.navParams.get('Gen');
    this.name=this.navParams.get('Name');
    this.birth=this.navParams.get('Birth');
    this.email=this.navParams.get('Email');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacebookInfoPage');
  }

}
