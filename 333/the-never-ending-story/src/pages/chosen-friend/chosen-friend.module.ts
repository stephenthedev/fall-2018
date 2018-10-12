import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChosenFriendPage } from './chosen-friend';

@NgModule({
  declarations: [
    ChosenFriendPage,
  ],
  imports: [
    IonicPageModule.forChild(ChosenFriendPage),
  ],
})
export class ChosenFriendPageModule {}
