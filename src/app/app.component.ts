import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from "../pages/tabs/tabs";
import { ProfilePage } from "../pages/profile/profile";
import { TambahUserPage } from '../pages/tambah-user/tambah-user';

// import { TambahjadwalPage } from '../pages/tambahjadwal/tambahjadwal';
import firebase from 'firebase';
import { AuthService } from '../services/authService';

import { User } from "../data/user.interface";
import { AdduserPage } from '../pages/adduser/adduser';
import { TambahmemberPage } from '../pages/tambahMember/tambahmember';

//melda tambahin
import { AngularFireModule } from "angularfire2";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = LoginPage;
  loginPage = LoginPage;
  tabsPage = TabsPage;
<<<<<<< HEAD
  profilPage = ProfilePage;
  tambahUserPage = TambahUserPage;
=======
  addUserPage = AdduserPage;
  
>>>>>>> 3f0e4f0a922861ef17c528a2f28503b90a050f3c
  // homePage= HomePage;

  private flag = false;
  private flagAdmin = false;
  user = {}

  @ViewChild('sideSignContent') nav : NavController;

  constructor(
      platform: Platform,
      statusBar: StatusBar,
      splashScreen: SplashScreen,
      private menuCtrl: MenuController,
      private authService: AuthService) {
    firebase.initializeApp({
      apiKey: "AIzaSyBh-3YvuV6tkKoBKeueUl8Tj4ZZ8I0QwYM",
    authDomain: "bmedic-app.firebaseapp.com",
    databaseURL: "https://bmedic-app.firebaseio.com",
    projectId: "bmedic-app",
    storageBucket: "bmedic-app.appspot.com",
    messagingSenderId: "226431192353"      
    });

    this.authService.logout()

    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        var uId = this.authService.getActiveUser().uid
        //console.log(uId);
        var userTable = firebase.database().ref("userTable/").child(uId)
        userTable.on('value', data =>{
          if (data.exists()){
            this.authService.user = data.val();
            if(this.authService.user.admin){
              this.flagAdmin = true;
            }
            this.flag = true;
            this.nav.setRoot(this.tabsPage);
          }
          else{
            this.nav.push(TambahmemberPage);
          }
      })
        return userTable.on('value', data =>{
            this.authService.user = data.val();
            if(this.authService.user.admin){
              this.flagAdmin = true;
            }
            this.flag = true;
            this.nav.setRoot(this.tabsPage);
        })
        // this.flag = true;
        // //this.user = this.authService.cekAdmin()
        // this.nav.setRoot(this.tabsPage);
        // // this.rootPage="HomePage";
      }else{
        this.flag = false;
        this.nav.setRoot(this.loginPage);
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.show();
    });
  }

  onLoad(page: any) {
    // this.authService.cekAdmin()
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  logout(){
    this.flag = false;
    this.flagAdmin = false;
    this.authService.logout();
  }

<<<<<<< HEAD
  profilUser(){
    this.nav.push(this.profilPage);
  }

  tambahuserr(){
    this.nav.push(this.tambahUserPage);
=======
  addUser()
  {
    this.nav.push(AdduserPage);
>>>>>>> 3f0e4f0a922861ef17c528a2f28503b90a050f3c
  }
}

