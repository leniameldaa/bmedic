import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailEventPage} from "../detail-event/detail-event";

import { AuthService } from '../../services/authService';
import firebase from "firebase";
import { Event } from "../../data/event.interface";
/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {

  user = {}
  events : Array<Event> = []

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthService) {
      this.getUserData()
      this.getEvent()
   }

   ionViewWillEnter() {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }

  detail(){
    this.navCtrl.push(DetailEventPage);
  }

  getUserData(){
    //cek admin atau tidak
    var uId = this.authService.getActiveUser().uid
    var userTable = firebase.database().ref("userTable/").child(uId)
    return userTable.on('value', data =>{
        this.user = data.val()
    })
  }

  getEvent(){
    var eventTable = firebase.database().ref("eventTable/")
    return eventTable.on('value', data =>{
      this.events = []
      data.forEach( event =>{
        this.events.push(event.val())
        console.log(this.events)
        return false
      })
      // //var temp: Event = data.val()
      // var list : any = data.val() 
      //   var keys = Object.keys(list)
      //   //console.log(keys)
      //   for(var i = 0; i< keys.length; i++){
      //     var k = keys[i]
      //     // var initials = list[k].initials
      //     // console.log(list[k])
      //     //this.events.push(list[k])
      //   }
    })
  }
}
