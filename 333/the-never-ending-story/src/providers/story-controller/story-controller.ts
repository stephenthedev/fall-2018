import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

/*
  Generated class for the StoryControllerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StoryControllerProvider {

  constructor(public loadingCtrl: LoadingController) {
    console.log('Hello StoryControllerProvider Provider');
  }

  saveStory(chapter: string){
    return new Promise((resolve, reject) =>{
        let loader = this.loadingCtrl.create();
        loader.present();
        setTimeout(() => {
          loader.dismiss();
          resolve();
        }, 3000);
    });
  }
}
