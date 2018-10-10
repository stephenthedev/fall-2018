import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectFriendPage } from './select-friend';
@NgModule({
  declarations: [
    SelectFriendPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectFriendPage),
  ],
})
export class SelectFriendPageModule {}
