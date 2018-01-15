import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/authService';
import { TambahMemberPage } from '../tambah-member/tambah-member';

import firebase from 'firebase';
/**
 * Generated class for the AdduserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adduser',
  templateUrl: 'adduser.html',
})
export class AdduserPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private authService: AuthService, 
    public loadingCtrl: LoadingController, 
    private toastCtrl: ToastController) {
      
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad AdduserPage');
  // }

  register(form: NgForm){
    var config = {
      apiKey: "AIzaSyBh-3YvuV6tkKoBKeueUl8Tj4ZZ8I0QwYM",
      authDomain: "bmedic-app.firebaseapp.com",
      databaseURL: "https://bmedic-app.firebaseio.com"      
    }
    var secondaryApp = firebase.initializeApp(config, "iseng");
    let x = secondaryApp.auth().createUserWithEmailAndPassword(form.value.email,form.value.password)
    secondaryApp.auth().signOut()
    this.presentToast("Pengguna berhasil ditambahkan")
    this.navCtrl.pop()
    // let loading = this.loadingCtrl.create({
    //   spinner: 'crescent',
    //   content: `
    //     <div class="custom-spinner-container">
    //       <div class="custom-spinner-box">Register</div>
    //     </div>`,
    //   dismissOnPageChange: true
    // });
    // loading.present();

    x.catch(function(error){
      let errorCode = error.code;
      let errorMessage = error.message;
      // console.log(error);
      this.presentToast(error)
      // loading.dismiss(errorMessage);
    });

    // loading.onDidDismiss((err:string) => {
      
      // toast.present();
    // });
    //this.navCtrl.push(TambahmemberPage)
  }
  presentToast(message: string){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 5000,
      position: 'top',
      cssClass: "login.scss"
    });
    toast.present()
  }

}
