import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private output: any;

  constructor(public navCtrl: NavController, private deviceMotion: DeviceMotion) {

  }

  start() {
    this.output = 'Starting';
    this.deviceMotion.watchAcceleration().subscribe((a) => {
      this.output = a;
    }, e => this.output = e);
  }

}
