import { Component, ViewChild } from '@angular/core';
import { IonicPage,MenuController, NavController, NavParams ,AlertController, ToastController} from 'ionic-angular';

import { TambahjadwalpiketPage} from '../tambahjadwalpiket/tambahjadwalpiket';

import { AuthService } from '../../services/authService';
import firebase from "firebase";
import { User } from "../../data/user.interface";
/**
 * Generated class for the JadwalpiketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jadwalpiket',
  templateUrl: 'jadwalpiket.html',
})
export class JadwalpiketPage {

  tambahjadwalpiketPage = TambahjadwalpiketPage;
  user = {}
  users : Array<User> = []
  @ViewChild('sideSignContent') nav : NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController,
    private menuCtrl: MenuController,
    private authService: AuthService,
    private toastCtrl: ToastController) {
      // this.getUserData()
      this.getJadwalpiket()
  
  }

  ionViewWillEnter() {
    //this. user = this.authService.user
    //console.log(this.authService.user)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JadwalpiketPage');
  }


  
  tambah(data) {
    this.navCtrl.push(TambahjadwalpiketPage,{kiriman:data});
  } 
  
  getUserData(){
    //cek admin atau tidak
    var uId = this.authService.getActiveUser().uid
    var userTable = firebase.database().ref("userTable/").child(uId)
    return userTable.on('value', data =>{
        this.user = data.val()
    })
  }

  getJadwalpiket(){
    var userTable = firebase.database().ref("userTable/")
    return userTable.on('value', data =>{
      this.users = []
      data.forEach( jadwal =>{

          this.users.push(jadwal.val())
        

          // console.log(this.events)
        return false        
      })
    })
  }
  presentToast(message:string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}

