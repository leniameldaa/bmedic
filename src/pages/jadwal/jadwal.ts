import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { User } from '../../data/user.interface';

import { AuthService } from '../../services/authService';
import firebase from "firebase";
import 'rxjs';
import { TambahjadwalPage } from '../tambahjadwal/tambahjadwal';

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
   private authService: AuthService,
   private modalCtrl: ModalController) {
    
  }

  ionViewWillEnter() {
    // this.getUserData()
    // console.log(this.authService.user)
    this.user = this.authService.user
    // console.log(this.user)
  }

  // addJadwal(){
  //   // let modal = this.modalCtrl.create(TambahjadwalPage);
  //   // modal.present();
  //   this.navCtrl.push(TambahjadwalPage);
  // }
  
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
