import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import firebase from "firebase";
import { TabsPage } from '../tabs/tabs';

import { AuthService } from '../../services/authService';
/**
 * Generated class for the TambahMemberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tambah-member',
  templateUrl: 'tambah-member.html',
})
export class TambahMemberPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private authService: AuthService ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TambahMemberPage');
  }

  tambahInformasiMember(form: NgForm)
  {
    if(this.authService.user== null){
      firebase.database().ref('userTable/'+ this.navParams.get('uid')).set({
        admin: false,
        email: this.navParams.get('email'),
        gender: form.value.jeniskelamin,
        jadwal: "",
        nama: form.value.nama,
        prodi: form.value.prodi,
        angkatan: form.value.angkatan,
        key: this.navParams.get('uid')
      })
      this.presentToast("Informasi berhasil disimpan");
    }
    else{
      //berarti edit doang
      firebase.database().ref('userTable/'+ this.authService.user.key).update({
        // admin: false,
        // email: this.navParams.get('email'),
        gender: form.value.jeniskelamin,
        // jadwal: "",
        nama: form.value.nama,
        prodi: form.value.prodi,
        angkatan: form.value.angkatan
      })
      this.presentToast("Informasi berhasil disimpan");
    }
    
    
  }

  presentToast(message:string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
    this.navCtrl.popToRoot();
  }


}
