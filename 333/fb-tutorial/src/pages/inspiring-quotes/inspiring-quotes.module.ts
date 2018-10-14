import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InspiringQuotesPage } from './inspiring-quotes';

@NgModule({
  declarations: [
    InspiringQuotesPage,
  ],
  imports: [
    IonicPageModule.forChild(InspiringQuotesPage),
  ],
})
export class InspiringQuotesPageModule {}
