
import { Injectable } from '@angular/core';
/*
  Generated class for the FacebookControllerProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FacebookControllerProvider {
  constructor() {
    console.log('Hello FacebookControllerProvider Provider');
  }
  getFriends() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{
          name: 'Patrick Dempsey',
          picture: 'https://cdn-blogs.tribune.com.pk/2018/01/62995-mcdreamyfinjpg-1516341470-228-640x480.jpg',
          id: 'someid1'
        }, {
          name: 'Tim Sherry',
          picture: 'https://pbs.twimg.com/profile_images/378800000675161665/a16b1518ba26514c3eef19fd3de8bc03_400x400.jpeg',
          id: 'someid2'
        }, {
          name: 'Chuck Norris',
          picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Chuck_Norris_May_2015.jpg/220px-Chuck_Norris_May_2015.jpg',
          id: 'someid3'
        }]);
      }, 1000)
    });
  }
}
