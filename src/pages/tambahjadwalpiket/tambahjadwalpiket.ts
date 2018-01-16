import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonicPage, NavController, NavParams , ToastController} from 'ionic-angular';

import firebase from "firebase";
import 'rxjs';
import { User } from "../../data/user.interface";
import { Toast } from 'ionic-angular/components/toast/toast';

/**
 * Generated class for the TambahjadwalpiketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tambahjadwalpiket',
  templateUrl: 'tambahjadwalpiket.html',
})
export class TambahjadwalpiketPage {
  user:any={}
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.user=this.navParams.get("kiriman")
    console.log('ionViewDidLoad TambahjadwalpiketPage');
   console.log(this.user)
  }

  submit(form: NgForm){

    firebase.database().ref('userTable/'+ this.user.nama).update({
      
      hari: form.value.hari,
      waktumulai: form.value.waktumulai,
      waktuselesai: form.value.waktuselesai
      
    })
    console.log(this.user.nama);
    this.presentToast("Jadwal berhasil ditambahkan")
  }

  presentToast(message:string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
    this.navCtrl.pop()
  }
}
