import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NotulenPage} from "../notulen/notulen";
import { AuthService } from '../../services/authService';
import firebase from "firebase";
import { TambahjadwalPage } from '../tambahjadwal/tambahjadwal';
/**
 * Generated class for the RapatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rapat',
  templateUrl: 'rapat.html',
})
export class RapatPage {

  user = {}

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService) {
  }

  ionViewWillEnter() {
    this.user = this.authService.user
  }

  notulen(){
    this.navCtrl.push(NotulenPage);
  }

  getUserData(){
    //cek admin atau tidak
    var uId = this.authService.getActiveUser().uid
    var userTable = firebase.database().ref("userTable/").child(uId)
    return userTable.on('value', data =>{
        this.user = data.val()
    })
  }

  addJadwal(){
    this.navCtrl.push(TambahjadwalPage);
  }
}
