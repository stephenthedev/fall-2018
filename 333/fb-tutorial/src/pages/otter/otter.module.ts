import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OtterPage } from './otter';

@NgModule({
  declarations: [
    OtterPage,
  ],
  imports: [
    IonicPageModule.forChild(OtterPage),
  ],
})
export class OtterPageModule {}
