import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from "firebase";
import { AuthService } from '../../services/authService';
import { User } from '../../data/user.interface';
import { TambahMemberPage } from '../tambah-member/tambah-member';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService,) 
  {
    //this.getProfile();
  }

  user = {}

  ionViewWillEnter() {
    this.user = this.authService.user
  }

  
  getProfile(){
    var uId = this.authService.getActiveUser().uid
    var userTable = firebase.database().ref("userTable/").child(uId)
    return userTable.on('value', data =>{
        this.user = data.val()
    })
  }  

  edit(){
    this.navCtrl.push(TambahMemberPage)
  }

}
