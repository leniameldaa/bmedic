import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the NotulenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notulen',
  templateUrl: 'notulen.html',
})
export class NotulenPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotulenPage');
  }

  // @ViewChild('myInput') myInput: ElementRef;
  // resize() {
  //     var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
  //     var scrollHeight = element.scrollHeight;
  //     element.style.height = scrollHeight + 'px';
  //     this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
  // }

  
}
