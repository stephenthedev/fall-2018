import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewPage } from './new';
import {Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@NgModule({
  declarations: [
    NewPage,
  ],
  imports: [
    IonicPageModule.forChild(NewPage),
  ],
})
export class NewPageModule {}
