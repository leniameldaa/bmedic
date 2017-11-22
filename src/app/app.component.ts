import { Component } from '@angular/core';
import { Platform, MenuController, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from "../pages/tabs/tabs";

import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  loginPage = LoginPage;
  tabsPage = TabsPage;
  // homePage= HomePage;

  nav : NavController;

  constructor(
      platform: Platform,
      statusBar: StatusBar,
      splashScreen: SplashScreen,
      private menuCtrl: MenuController) {
    firebase.initializeApp({
      apiKey: "AIzaSyAw2WVW6REr4iM4WTOe9oWe8xuER8NMiO8",
      authDomain: "bmedic-70b1a.firebaseapp.com"
    });

    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        this.nav.setRoot(this.tabsPage);
        this.rootPage="HomePage";
      }else{
        this.nav.setRoot(this.loginPage);
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
}

