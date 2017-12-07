import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,Response } from '@angular/http';

import { User } from '../../data/user.interface';

import { AuthService } from '../../services/authService';
import firebase from "firebase";
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

  private apaAdmin : any

  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public http: Http,
   private authService: AuthService) {
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JadwalPage');
  }

  ionViewDidEnter() {
    this.apaAdmin = this.cekAdmin()
    console.log(this.apaAdmin)
  }

  cekAdmin(){
    //cek admin atau tidak
    var uId = firebase.auth().currentUser.uid
    firebase.database().ref("userTable/"+ uId).once('value').then(function(snapshot) {
      var isAdmin = snapshot.val().admin;
      console.log(isAdmin)
      return isAdmin
    });
  }

  ambilData(){
    var a = firebase.database().ref("userTable/naufal").once('value').then(function(snapshot) {
      var email = snapshot.val().email;
      console.log(email)  
    });
  }

  setData(){
    var uId = firebase.auth().currentUser.uid
    firebase.database().ref('userTable/'+ uId).set({
      admin: true,
      email: "naufal.irfan@student.umn.ac.id"
    })
  }
}
