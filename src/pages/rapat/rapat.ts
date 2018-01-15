import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NotulenPage} from "../notulen/notulen";
import { AuthService } from '../../services/authService';
import firebase from "firebase";
import { TambahjadwalPage } from '../tambahjadwal/tambahjadwal';
import { Rapat } from "../../data/rapat.interface";
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
  rapats : Array<Rapat> = []

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService) {
    this.getRapat()
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

  getRapat(){
    var rapatTable = firebase.database().ref("rapatTable/")
    return rapatTable.on('value', data=>{
      this.rapats = []
      data.forEach ( rapat =>{
        this.rapats.push(rapat.val())
        console.log(this.rapats)
        return false
      })
    })
  }

  addJadwal(){
    this.navCtrl.push(TambahjadwalPage);
  }
}
