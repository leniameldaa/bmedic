import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthService } from '../../services/authService';
import { TambahjadwalpiketPage} from '../tambahjadwalpiket/tambahjadwalpiket';

import { User } from '../../data/user.interface';

import firebase from "firebase";
import 'rxjs';

/**
 * Generated class for the AlluserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alluser',
  templateUrl: 'alluser.html',
})
export class AlluserPage {
  users : Array<User> = []
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private toastCtrl: ToastController,
     private authService: AuthService) {
       this.getAllUser()
       console.log(this.users)
  }

  getAllUser(){
    var userTable = firebase.database().ref("userTable/")
    return userTable.on('value', data =>{
      data.forEach( user =>{
          this.users.push(user.val())
          // console.log(this.events)
        return false
      })
    })
  }

  tambah(data){
    this.navCtrl.push(TambahjadwalpiketPage,{kiriman:data})
  }
}
