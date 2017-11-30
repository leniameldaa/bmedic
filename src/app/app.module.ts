import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Page
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { RapatPage } from '../pages/rapat/rapat';
import { JadwalPage } from '../pages/jadwal/jadwal';
import { EventPage } from '../pages/event/event';
//import { AngularFireModule } from 'angularfire2';
//import { AngularFireDatabaseModule } from 'angularfire2/database'
// Service
import { AuthService } from '../services/authService';

// var config = {
//   apiKey: "AIzaSyBh-3YvuV6tkKoBKeueUl8Tj4ZZ8I0QwYM",
//   authDomain: "bmedic-app.firebaseapp.com",
//   databaseURL: "https://bmedic-app.firebaseio.com",
//   projectId: "bmedic-app",
//   storageBucket: "bmedic-app.appspot.com",
//   messagingSenderId: "226431192353"
// };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    TabsPage,
    RapatPage,
    JadwalPage,
    EventPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //AngularFireDatabaseModule,
    //AngularFireModule.initializeApp(config),
    //AngularFireModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    TabsPage,
    RapatPage,
    JadwalPage,
    EventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
