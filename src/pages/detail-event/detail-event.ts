import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { Event } from "../../data/event.interface";

/**
 * Generated class for the DetailEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-event',
  templateUrl: 'detail-event.html',
})
export class DetailEventPage {
  event:any ={}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.event = this.navParams.get("kiriman")
    console.log(this.event.key)
    //console.log('ionViewDidLoad DetailEventPage');
  }

}
