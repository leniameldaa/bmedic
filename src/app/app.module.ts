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
import { NotulenPage } from "../pages/notulen/notulen";
import { DetailEventPage } from "../pages/detail-event/detail-event";
import { TambahjadwalPage } from '../pages/tambahjadwal/tambahjadwal';
import { TambaheventPage } from '../pages/tambahevent/tambahevent';
import { TambahMemberPage } from '../pages/tambah-member/tambah-member';
import { AdduserPage } from '../pages/adduser/adduser';

//Service
import { AuthService } from '../services/authService';
import { HttpModule } from '@angular/http';
import { ProfilePage } from '../pages/profile/profile';
import { LocalNotifications } from '@ionic-native/local-notifications';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    TabsPage,
    RapatPage,
    JadwalPage,
    EventPage,
    NotulenPage,
    DetailEventPage,
    TambahjadwalPage,
    TambaheventPage,
    AdduserPage,
    TambahMemberPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
    EventPage,
    NotulenPage,
    DetailEventPage,
    TambahjadwalPage,
    TambaheventPage,
    AdduserPage,
    TambahMemberPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalNotifications
  ]
})
export class AppModule {}
