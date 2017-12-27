import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  user = {}
  
  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   private authService: AuthService) {
    
  }

  ionViewWillEnter() {
    // this.getUserData()
    // console.log(this.authService.user)
    this.user = this.authService.user
    // console.log(this.user)
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

  getUserData(){
    //cek admin atau tidak
    var uId = this.authService.getActiveUser().uid
    var userTable = firebase.database().ref("userTable/").child(uId)
    return userTable.on('value', data =>{
        this.user = data.val()
    })
  }
}
