import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from "../pages/tabs/tabs";

// import { TambahjadwalPage } from '../pages/tambahjadwal/tambahjadwal';
import firebase from 'firebase';
import { AuthService } from '../services/authService';

import { User } from "../data/user.interface";
import { AdduserPage } from '../pages/adduser/adduser';
import { TambahMemberPage } from '../pages/tambah-member/tambah-member';
import { ProfilePage } from '../pages/profile/profile';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = LoginPage;
  loginPage = LoginPage;
  tabsPage = TabsPage;
  addUserPage = AdduserPage;
  
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
      databaseURL: "https://bmedic-app.firebaseio.com"      
    });

    this.authService.logout()

    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        var uId = this.authService.getActiveUser().uid;
        //console.log(uId);
        var user = firebase.auth().currentUser;
        var userTable = firebase.database().ref("userTable/").child(uId)
        userTable.on('value', data =>{
            if(data.val() != null){
              this.authService.user = data.val()
              //console.log("masuk situ")
              if(this.authService.user.admin){
                this.flagAdmin = true;
              }
              this.flag = true;
              this.nav.setRoot(this.tabsPage);
            }
            else{
              //console.log("masuk sini")
              this.nav.push(TambahMemberPage, {uid:uId, email:user.email});
            }
      })
        // return userTable.on('value', data =>{
        //     this.authService.user = data.val();
        //     if(this.authService.user.admin){
        //       this.flagAdmin = true;
        //     }
        //     this.flag = true;
        //     this.nav.setRoot(this.tabsPage);
        // })
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

  addUser()
  {
    this.nav.push(AdduserPage);
  }

  profilUser()
  {
    this.nav.push(ProfilePage);
  }
}