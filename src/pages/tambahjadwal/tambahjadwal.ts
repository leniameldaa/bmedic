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
    // tambah ke db (3 jam ngerjainnya)
    var db = firebase.database().ref('rapatTable/'+this.studentForm.value.nama);
    db.set({
      namaRapat: this.studentForm.value.nama,
      tanggalRapat: this.studentForm.value.tgl,
      waktuRapat: this.studentForm.value.wkt,
      tempatRapat: this.studentForm.value.tempat
    });
    this.presentToast("Rapat berhasil ditambahkan")
    console.log(this.studentForm.value);
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Processing'
    });
    loading.present()

    this.authSvc.getActiveUser().getToken()
    
    loading.dismiss()
  }

  studentForm: FormGroup
  
  ngOnInit() {
    this.initializeForm();
  }
  
  
  private initializeForm() {
    this.studentForm = new FormGroup({
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
