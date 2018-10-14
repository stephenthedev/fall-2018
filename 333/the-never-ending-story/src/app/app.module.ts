<<<<<<< HEAD
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SelectFriendPage } from '../pages/select-friend/select-friend';
import { ChosenFriendPage } from '../pages/chosen-friend/chosen-friend';
import { StoryControllerProvider } from '../providers/story-controller/story-controller';
import { FacebookControllerProvider } from '../providers/facebook-controller/facebook-controller';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SelectFriendPage,
    ChosenFriendPage
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
    ChosenFriendPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StoryControllerProvider,
    FacebookControllerProvider
  ]
})
export class AppModule {}
=======
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SelectFriendPage } from '../pages/select-friend/select-friend';
import { ChosenFriendPage } from '../pages/chosen-friend/chosen-friend';
import { StoryControllerProvider } from '../providers/story-controller/story-controller';
import { FacebookControllerProvider } from '../providers/facebook-controller/facebook-controller';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SelectFriendPage,
    ChosenFriendPage
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
    ChosenFriendPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StoryControllerProvider,
    FacebookControllerProvider
  ]
})
export class AppModule {}
>>>>>>> e8fba67409599249a3edb518c1939c2c11e4fcce
