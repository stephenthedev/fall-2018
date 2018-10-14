import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SelectFriendPage } from '../pages/select-friend/select-friend';
import { FriendSelectionConfirmationPage } from '../pages/friend-selection-confirmation/friend-selection-confirmation';
import { StoryControllerProvider } from '../providers/story-controller/story-controller';
import { FacebookControllerProvider } from '../providers/facebook-controller/facebook-controller';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SelectFriendPage,
    FriendSelectionConfirmationPage
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
    FriendSelectionConfirmationPage
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
