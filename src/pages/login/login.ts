import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import {AuthService } from '../../services/auth';
import { HomePage } from '../home/home';
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

  loginForm: FormGroup;

  constructor(private alertCtrl: AlertController, private authService: AuthService,public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.initializeForm();
  }

  initializeForm(){
    this.loginForm = new FormGroup({
      email: new FormControl(null,Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  login(){
    this.authService.signin(this.loginForm.value.email, 
      this.loginForm.value.password).then(
        authdata=>{
          let alert = this.alertCtrl.create({
            message: "Login Success!",
            buttons:[
              {
                text:"OK",
                role:'cancel',
                handler: () =>{this.navCtrl.setRoot(HomePage);}
              }
            ]
          });
          alert.present();
        }
      )
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad LoginPage');
  // }

}
