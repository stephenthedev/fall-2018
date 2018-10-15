import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FbDetailsPage } from './fb-details';

@NgModule({
  declarations: [
    FbDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(FbDetailsPage),
  ],
})
export class FbDetailsPageModule {}
