import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FbLoginPage } from '../fb-login/fb-login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
  fbPage = FbLoginPage;

  constructor(public navCtrl: NavController) {

  }

}
