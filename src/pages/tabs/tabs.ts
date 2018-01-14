import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Halaman
import { JadwalPage } from '../jadwal/jadwal';
import { RapatPage } from '../rapat/rapat';
import { EventPage } from '../event/event';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  jadwalPage = JadwalPage;
  rapatPage = RapatPage;
  eventPage = EventPage;
  color: string = "medic";

}
