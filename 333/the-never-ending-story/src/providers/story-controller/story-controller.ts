import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { Credentials } from '../creds';

/*
  Generated class for the StoryControllerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StoryControllerProvider {

  constructor(
    public loadingCtrl: LoadingController,
    public http: HttpClient
  ) {
    console.log('Hello StoryControllerProvider Provider');
  }

  saveStory(chapter: string) {
    return new Promise((resolve, reject) => {
      let loader = this.loadingCtrl.create();
      loader.present();
      setTimeout(() => {
        loader.dismiss();
        resolve();
      }, 3000);
    });
  }

  listChaptersForAStory() {
    const creds = Credentials.getCreds();

    let headers = new HttpHeaders().set("apiKey", creds.apiPassword);


    return this.http.get(
      `http://localhost:3000/chapters`,
      {headers: headers}
    );
  }

}
