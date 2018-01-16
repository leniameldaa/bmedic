import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/authService';
// import { Http,Response } from '@angular/http';
import firebase from "firebase";

/**
 * Generated class for the TambahjadwalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tambahjadwal',
  templateUrl: 'tambahjadwal.html',
})
export class TambahjadwalPage {

  constructor(public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private authSvc: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TambahjadwalPage');
  }

  onSubmit() {
    var db = firebase.database().ref('rapatTable/'+this.rapatForm.value.nama);
    db.set({
      namaRapat: this.rapatForm.value.nama,
      tanggalRapat: this.rapatForm.value.tgl,
      waktuRapat: this.rapatForm.value.wkt,
      tempatRapat: this.rapatForm.value.tempat
    });
    this.presentToast("Rapat berhasil ditambahkan")
    console.log(this.rapatForm.value);
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Processing'
    });
    loading.present()

    this.authSvc.getActiveUser().getToken()
    
    loading.dismiss()
  }

  rapatForm: FormGroup
  
  ngOnInit() {
    this.initializeForm();
  }
  
  
  private initializeForm() {
    this.rapatForm = new FormGroup({
      nama: new FormControl(null, Validators.required),
      tgl: new FormControl(null, Validators.required),
      wkt: new FormControl(null, Validators.required),
      tempat: new FormControl(null, Validators.required)
    })
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
