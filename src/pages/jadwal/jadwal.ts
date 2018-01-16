import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController , ToastController } from 'ionic-angular';

import { User } from '../../data/user.interface';
import { Event } from "../../data/event.interface";

import { AuthService } from '../../services/authService';
import firebase from "firebase";
import 'rxjs';
import { TambahjadwalPage } from '../tambahjadwal/tambahjadwal';
// import { LocalNotifications } from '@ionic-native/local-notifications';
import { Platform } from 'ionic-angular/platform/platform';
import { TambahjadwalpiketPage} from '../tambahjadwalpiket/tambahjadwalpiket';
import { LocalNotifications } from '@ionic-native/local-notifications';



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
  //users : Array<User> = []
  events : Array<Event> = []

  @ViewChild('sideSignContent') nav : NavController;
  
  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   private authService: AuthService,
   private modalCtrl: ModalController,
   private localNotifications: LocalNotifications,
   private platform: Platform,private toastCtrl: ToastController) {
    this.getJadwalpiket()
    console.log(this.events)
  }

  notif(){
    this.platform.ready().then(() => {
      this.localNotifications.schedule({
        title: 'My First Notification',
        text: 'Hello World',
        at: new Date(new Date().getTime() + 3600)
     });
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad JadwalpiketPage');
  }
  ionViewWillEnter() {
    this.events.length = 0
    this.getEvent()
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

  tambah(data) {
    this.navCtrl.push(TambahjadwalpiketPage,{kiriman:data});
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
  // getJadwalpiket(){
  //   var userTable = firebase.database().ref("userTable/")
  //   return userTable.on('value', data =>{
  //     this.users = []
  //     data.forEach( jadwal =>{
  //         this.users.push(jadwal.val())
  //         // console.log(this.events)
  //       return false
  //     })
  //   })
  }


  presentToast(message:string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  getEvent(){
    var eventTable = firebase.database().ref("eventTable/")
    return eventTable.on('value', data =>{
      data.forEach( event =>{
        var temp = event.val()
        if(temp.nPendaftar.includes(this.authService.user.nama)){
          this.events.push(event.val())
        }
        // console.log(this.events)
        return false
      })
    })
  }
}
