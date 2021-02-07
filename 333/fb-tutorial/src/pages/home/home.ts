import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TutorialContentPage } from '../tutorial-content/tutorial-content';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToTutorial() {
    this.navCtrl.push(TutorialContentPage);
  }

}
