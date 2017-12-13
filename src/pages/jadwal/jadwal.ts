import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,Response } from '@angular/http';

import { User } from '../../data/user.interface';

import { AuthService } from '../../services/authService';
import 'rxjs';

/**
 * Generated class for the JadwalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jadwal',
  templateUrl: 'jadwal.html',
})
export class JadwalPage {

  get : string
  respon : string = "a"

  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public http: Http,
   private authService: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JadwalPage');
  }

  ambilData(){
    this.authService.getActiveUser().getIdToken()
    .then((token:string) =>{
      // console.log(token);
      // const uid = 'R2TdSHeu5offP4tq8BMlMyvoKDB2'//this.authService.getActiveUser().uid;
      this.http
        .get('https://bmedic-app.firebaseio.com/userTable/naufal.json')
        .map((response : Response) => {
          console.log("masuk");
          this.respon = response.json()
            // this.get = response.json();
            console.log(this.respon);
            // return this.favoriteQuotes;
        })
        console.log(this.respon);
    })
  }
}
