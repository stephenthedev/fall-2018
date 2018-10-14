import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FriendSelectionConfirmationPage } from './friend-selection-confirmation';

@NgModule({
  declarations: [
    FriendSelectionConfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(FriendSelectionConfirmationPage),
  ],
})
export class FriendSelectionConfirmationPageModule {}
