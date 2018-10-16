
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SelectFriendPage } from '../pages/select-friend/select-friend';
import { ChosenFriendPage } from '../pages/chosen-friend/chosen-friend';
import { FbLoginPage } from '../pages/fb-login/fb-login'
import { Facebook } from '@ionic-native/facebook';
import { StoryControllerProvider } from '../providers/story-controller/story-controller';
import { FacebookControllerProvider } from '../providers/facebook-controller/facebook-controller';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SelectFriendPage,
    ChosenFriendPage,
    FbLoginPage
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
    ChosenFriendPage,
    FbLoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StoryControllerProvider,
    FacebookControllerProvider,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
