import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import firebase from "firebase";
import 'rxjs';

//interface
import { Event } from "../../data/event.interface";
import { Toast } from 'ionic-angular/components/toast/toast';

/**
 * Generated class for the TambaheventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tambahevent',
  templateUrl: 'tambahevent.html',
})
export class TambaheventPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TambaheventPage');
  }

  submit(form: NgForm){
    // var temp: Event
    //  temp.deskripsi = form.value.deskripsi
    //  temp.jdPendaftar = "0"
    //  temp.key = form.value.nama
    //  temp.lokasi = form.value.tempat
    //  temp.maks = form.value.maks
    //  temp.nPendaftar = "0"
    //  temp.penyelenggara = form.value.penyelenggara
    //  temp.tanggal = form.value.tgl
    // console.log(form.value.deskripsi)

    firebase.database().ref('eventTable/'+ form.value.nama).set({
      deskripsi: form.value.deskripsi,
      jdPendaftar: "0",
      key: form.value.nama,
      lokasi: form.value.tempat,
      maks: form.value.maks,
      nPendaftar: "0",
      penyelenggara: form.value.penyelenggara,
      tanggal: form.value.tgl,
      waktu: form.value.wkt + "-"+ form.value.sls
    })

    this.presentToast()
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Event berhasil ditambahkan',
      duration: 2000,
      position: 'top'
    });
    toast.present();
    this.navCtrl.pop()
  }

}
