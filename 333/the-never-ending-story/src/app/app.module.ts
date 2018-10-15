import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FriendSelectedPage } from '../pages/friend-selected/friend-selected';
import { SelectFriendPage } from '../pages/select-friend/select-friend';
import { StoryControllerProvider } from '../providers/story-controller/story-controller';
import { FacebookControllerProvider } from '../providers/facebook-controller/facebook-controller';
import { FacebookPage } from '../pages/facebook/facebook';
import { Facebook } from '@ionic-native/facebook';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SelectFriendPage,
    FriendSelectedPage,
    FacebookPage
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
    FriendSelectedPage,
    FacebookPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StoryControllerProvider,
    FacebookControllerProvider,
    Facebook
  ]
})
export class AppModule {}
