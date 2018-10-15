import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SelectFriendPage } from '../pages/select-friend/select-friend';
import { FriendselectedPage } from '../pages/friendselected/friendselected';
import { StoryControllerProvider } from '../providers/story-controller/story-controller';
import { FacebookControllerProvider } from '../providers/facebook-controller/facebook-controller';
import {Facebook} from '@ionic-native/facebook';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SelectFriendPage,
    FriendselectedPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SelectFriendPage,
    FriendselectedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StoryControllerProvider,
    FacebookControllerProvider
  ]
})
export class AppModule {}
