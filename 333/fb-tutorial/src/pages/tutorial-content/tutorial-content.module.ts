import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TutorialContentPage } from './tutorial-content';

@NgModule({
  declarations: [
    TutorialContentPage,
  ],
  imports: [
    IonicPageModule.forChild(TutorialContentPage),
  ],
})
export class TutorialContentPageModule {}
