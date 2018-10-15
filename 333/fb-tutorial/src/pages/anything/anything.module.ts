import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnythingPage } from './anything';

@NgModule({
  declarations: [
    AnythingPage,
  ],
  imports: [
    IonicPageModule.forChild(AnythingPage),
  ],
})
export class AnythingPageModule {}
