import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { Event } from "../../data/event.interface";

import firebase from 'firebase';

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
  link:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.event = this.navParams.get("kiriman")
    var storage = firebase.storage();
    var storageRef = storage.ref();
    var tangRef = storageRef.child(this.event.key+'.jpeg');
    tangRef.getDownloadURL().then(function(url){
      // Once we have the download URL, we set it to our img element
      // this.link = url
      var temp = document.getElementById("gambar")
      temp.setAttribute("src", url) 
      console.log(url)

    }).catch(function(error) {
      // If anything goes wrong while getting the download URL, log the error
      console.log(error);
      });
    console.log(this.event.key)
    //console.log('ionViewDidLoad DetailEventPage');
  }

}
