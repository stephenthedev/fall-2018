import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { AlternatePage } from '../alternate/alternate';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public fb: Facebook) {

  }

  loginAction(callback: any = null)
  {
      // Login with permissions
      this.fb.login(['public_profile', 'user_photos', 'email', 'user_birthday'])
      .then( (res: FacebookLoginResponse) => {

          // The connection was successful
          if(res.status == "connected") {

              // Get user infos from the API
              this.fb.api("/me?fields=name,gender,birthday,email", []).then((user) => {

                  // Get the connected user details
                  var gender    = user.gender;
                  var birthday  = user.birthday;
                  var name      = user.name;
                  var email     = user.email;
                  
                  // => Open user session and redirect to the next page
                  if(callback != null)
                  {
                    callback.call(this, gender, birthday, name, email);//gender, birthday, name, email);
                  }
              });

          }
          // An error occurred while loging-in
          else {

              console.log("An error occurred...");

          }

      })
      .catch((e) => {
          console.log('Error logging into Facebook', e);
      });
  }

  loginAndGoTo()
  {
    this.loginAction((gender: string, birthday: string, name: string, email: string) => {
      this.navCtrl.push(AlternatePage, { gender: gender, birthday: birthday, name: name, email: email });
    });
  }
}
