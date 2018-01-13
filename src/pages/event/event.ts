import { Component, ViewChild } from '@angular/core';
import { IonicPage,MenuController, NavController, NavParams,AlertController, ToastController  } from 'ionic-angular';
import { DetailEventPage} from "../detail-event/detail-event";
import { TambaheventPage} from '../tambahevent/tambahevent';

import { AuthService } from '../../services/authService';
import firebase, { User } from "firebase";
import { Event } from "../../data/event.interface";
/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {
  tambaheventPage = TambaheventPage;
  user = {}
  events : Array<Event> = []
  @ViewChild('sideSignContent') nav : NavController;

  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController,
    public navParams: NavParams,
    private menuCtrl: MenuController,
    private authService: AuthService,
    private toastCtrl: ToastController) {
      // this.getUserData()
      this.getEvent()
   }

   ionViewWillEnter() {
    //this. user = this.authService.user
    //console.log(this.authService.user)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }

  detail(data){
    this.navCtrl.push(DetailEventPage, {kiriman: data });
  }
  
  tambah() {
    this.navCtrl.push(TambaheventPage)
  } 

  getUserData(){
    //cek admin atau tidak
    var uId = this.authService.getActiveUser().uid
    var userTable = firebase.database().ref("userTable/").child(uId)
    return userTable.on('value', data =>{
        this.user = data.val()
    })
  }

  getEvent(){
    var eventTable = firebase.database().ref("eventTable/")
    return eventTable.on('value', data =>{
      this.events = []
      data.forEach( event =>{
        this.events.push(event.val())
        // console.log(this.events)
        return false
      })
    })
  }

  daftar(data){
    // var ref = firebase.database().ref("eventTable/" + data.key)
    //update jumlah pendaftar
    console.log(data.jPendaftar)
    if(data.jPendaftar == data.maks){
      return this.presentToast("Event ini sudah memiliki cukup tenaga medis")
    }
    else{
      var tempJumlah:number = data.jPendaftar + 1
    }
    // update nama pendaftar
    var tempNama:string = data.nPendaftar
    if(tempNama.includes(this.authService.user.nama)){
      return this.presentToast("Anda sudah terdaftar di event ini")
    }
    else{
      if(tempNama == '0'){
        tempNama = this.authService.user.nama
      }
      else{
        tempNama = data.nPendaftar+ " " + this.authService.user.nama
      }
    }
    console.log(tempNama +" "+tempJumlah)
    firebase.database().ref('eventTable/'+ data.key).update({
      nPendaftar: tempNama,
      jPendaftar: tempJumlah
    })
    return this.presentToast("Anda berhasil mendaftar di event ini")
    // var updates ={}
    // updates['/eventTable' + data.key] = tempJumlah
    // updates['/eventTable' + data.key] = tempNama

    // return firebase.database().ref().update(updates)
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
