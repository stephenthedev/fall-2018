import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
/*creates a connection between this page and all pages in add-story*/
import { AddStoryPage } from './add-story';

@NgModule({
  declarations: [
    AddStoryPage
  ],
  imports: [
    IonicPageModule.forChild(AddStoryPage),
  ],
})
export class AddStoryPageModule {}
