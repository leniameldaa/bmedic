import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { HomePage } from '../home/home';
import { AuthService } from '../../services/authService';
//import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  // arrData = [];

  constructor(
    private alertCtrl: AlertController,
    private authService: AuthService,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    /*private fdb: AngularFireDatabase*/) {
      /*this.fdb.list("/myUsers/").valueChanges().subscribe(_data => {
        this.arrData = _data;
        console.log(this.arrData);
      })
      this.fdb.list("/myUsers/").push("aa");*/
  }

  y = true;
  error = '';

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
  }


  login(form: NgForm){
    let x = this.authService.signin(form.value.email, form.value.password);
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box">Login</div>
        </div>`,
      dismissOnPageChange: true
    });
    loading.present();

    x.catch(function(error){
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(error);
      loading.dismiss(errorMessage);
    });

    loading.onDidDismiss((err:string) => {
      this.y = false;
      this.error = err;
    });
  }
}
